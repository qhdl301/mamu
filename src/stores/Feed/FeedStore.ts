import { action, makeObservable, observable } from 'mobx';
import { FeedInfo, createFeedComentService, createLikeUserService, deleteLikeUserService, getFeedLikeUserService, getIsLikeService, getFeedComentService, FeedComentInfo, CreateFeedComentRequestType } from 'services/Feed';

export default class FeedStore {
    isLike : boolean;
    likeCount : number;
    feedComent : FeedComentInfo[] = [];
    
    constructor(readonly feedInfo : FeedInfo, readonly currentUserId : string) {
        this.isLike = false;
        this.likeCount = 0;

        makeObservable(this, {
            feedInfo: observable,
            feedComent : observable,
            likeCount : observable, 
            isLike: observable,
            getIsLike : action,
            putIsLike: action,
            getLikeCount: action,
            insertFeedComent: action,
            getFeedComentList: action
        });
        this.getIsLike();
    }

    async getIsLike() {
        await getIsLikeService(
            {
                feedId: this.feedInfo.feedId,
                currentUserId: this.currentUserId
            }
        ).then((data) => {
            this.isLike = !!(data ?? false);
            this.getLikeCount();
        });
    }

    async putIsLike(){
        if(this.isLike){
            await deleteLikeUserService({currentUserId : this.currentUserId, feedId : this.feedInfo.feedId}); // 현재는 클릭이 되어있던거니까 => 삭제하는 서비스 (await)
        }else{
            await createLikeUserService({currentUserId : this.currentUserId, feedId : this.feedInfo.feedId}); // 인서트하는 서비스 (await)
        }
        await this.getIsLike();
    }

    async getLikeCount() {
        this.likeCount = (await getFeedLikeUserService(this.feedInfo.feedId)).length;
    }

    async getFeedComentList() {
        try{
            this.feedComent.splice(0);
            this.feedComent = await getFeedComentService(this.feedInfo.feedId)
        } catch (error) {
            return console.log(error);
        }
    }

    insertFeedComent(feedComentData:Omit<CreateFeedComentRequestType, 'uid'>) {
        return createFeedComentService({
            uid : this.currentUserId,
            ...feedComentData
        }).then(() => {
            this.getFeedComentList();
        });
    }

}