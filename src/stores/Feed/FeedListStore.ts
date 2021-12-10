import { action, makeObservable, observable } from 'mobx';
import { createFeedService, getFeedService, CreateFeedRequestType } from 'services/Feed';
import { FeedStore } from '.';

export default class FeedList {
    feedInfos : FeedStore[] = [];

    constructor(private readonly currentUserUid:string) {

         makeObservable(this, {
            feedInfos : observable,
            getFeedList : action,
            insertFeedInfo : action,
         }); 
    }

    async getFeedList() {
        try {
            const response = await getFeedService();
            this.feedInfos = response.map(item => new FeedStore(item, this.currentUserUid));
            console.log("feedInfos      ",this.feedInfos);
        } catch (error) {
            return console.log(error);
        }
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        return createFeedService(FeedInfoData).then(() => {
            this.getFeedList();
        });
    }

}