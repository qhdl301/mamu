import { action, makeObservable, observable } from 'mobx';
import { createFeedService, updateFeedService, FeedInfo, getFeedService, UpdateFeedGreateRequestType, CreateFeedRequestType } from 'services';

export default class Feed {

    feedInfos : FeedInfo[] = [];

    constructor() {
        
         makeObservable(this, {
            feedInfos : observable,
            getFeedInfos : action,
            insertFeedInfo : action,
            updateFeedInfo : action,
         });
    }

    async getFeedInfos() {
        this.feedInfos = await getFeedService();
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        createFeedService(FeedInfoData).then(() => {
            this.getFeedInfos();
        });
    }

    updateFeedInfo(FeedInfoData : UpdateFeedGreateRequestType) {
        updateFeedService(FeedInfoData).then(() => {
            this.getFeedInfos();
        });  
    }

}