import { action, makeObservable, observable } from 'mobx';
import { createFeedService, getFeedService, CreateFeedRequestType, FeedInfo  } from 'services/Feed';
import { FeedStore } from '.';

export default class FeedList {

    feedInfos : FeedStore[] = [];
    clickUserUid : string;

    constructor() {
        this.clickUserUid = '';

         makeObservable(this, {
            feedInfos : observable,
            getFeedList : action,
            insertFeedInfo : action,
         }); 
    }

    async getFeedList(userUid : FeedInfo['uid']) {
        try {
            const response = await getFeedService();
            this.clickUserUid = userUid;
            this.feedInfos = response.map(item => new FeedStore(item, this.clickUserUid));
        } catch (error) {
            return console.log(error);
        }
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        return createFeedService(FeedInfoData).then(() => {
            this.getFeedList(this.clickUserUid);
        });
    }

}