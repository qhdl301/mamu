import { action, makeObservable, observable } from 'mobx';
import { FeedInfo } from 'services';
import getIsLikeService from 'services/getIsLikeService';

export default class FeedStore {
    isLike : boolean;
    likeCount : number;

    constructor(readonly feedInfo : FeedInfo, readonly currentUserId : string) {
        this.isLike = false;
        this.likeCount = 0;

         makeObservable(this, {
            feedInfo : observable,
            isLike: observable,
            getIsLike : action,
            putIsLike: action,
         });

         this.getIsLike();
    }

    async getIsLike() {
        const data = await getIsLikeService(
            {
                feedId : this.feedInfo.feedId,
                uid : this.currentUserId
            }
        );
        
        this.isLike = !!(data ?? false)
    }

    // todo
    async putIsLike(){
        if(this.isLike){
            // 현재는 클릭이 되어있던거니까 => 삭제하는 서비스 (await)
        }else{
            // 인서트하는 서비스 (await)
        }
        await this.getIsLike()
    }
}