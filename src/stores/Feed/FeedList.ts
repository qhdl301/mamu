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
            this.feedInfos = response.map(item => new FeedStore(item, userUid));
        } catch (error) {
            return console.log(error);
        }
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        return createFeedService(FeedInfoData).then(async () => {
            await this.getFeedList(this.clickUserUid);
        });
    }

}