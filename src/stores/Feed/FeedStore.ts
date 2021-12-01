import { action, makeObservable, observable } from 'mobx';
import { FeedInfo, createLikeUserService, deleteLikeUserService, getFeedLikeUserService } from 'services';
import getIsLikeService from 'services/getIsLikeService';

export default class FeedStore {
    isLike : boolean;
    likeCount : number;

    constructor(readonly feedInfo : FeedInfo, readonly currentUserId : string) {
        this.isLike = false;
        this.likeCount = 0;

        makeObservable(this, {
            feedInfo: observable,
            likeCount : observable, 
            isLike: observable,
            getIsLike : action,
            putIsLike: action,
            getLikeCount : action,
         });

        this.getIsLike();
    }

    async getIsLike() {
        const data = await getIsLikeService(
            {
                feedId : this.feedInfo.feedId,
                currentUserId : this.currentUserId
            }
        );
        
        this.isLike = !!(data ?? false);
        this.getLikeCount();
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

}