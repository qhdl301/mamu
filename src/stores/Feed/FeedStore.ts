import { action, makeObservable, observable } from 'mobx';
import { createFeedService, FeedInfo, getFeedService } from '../../services';

export default class Feed {

    feedInfos : FeedInfo[] = [];

    constructor() {
        
         makeObservable(this, {
            feedInfos: observable,
            getFeedInfos : action,
            insertFeedInfo: action,
         });
    }

    async getFeedInfos() {
        this.feedInfos = await getFeedService();
    }

    insertFeedInfo(FeedInfoData: FeedInfo) {
        createFeedService(FeedInfoData).then(() => {
            this.getFeedInfos();
        });
    }

}