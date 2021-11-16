import { action, makeObservable, observable } from 'mobx';
import { createFeedService, CreateFeedRequestType, getFeedService } from '../../services';

export default class Feed {

    feedbasicInfo : CreateFeedRequestType;

    constructor(props: CreateFeedRequestType) {
        this.feedbasicInfo = props;
        
         makeObservable(this, {
            feedbasicInfo: observable,
            getFeedInfos : action,
            insertFeedInfo: action,
         });
    }

    async getFeedInfos() {
        //this.feedbasicInfo = await getFeedService();
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        createFeedService({
            ...FeedInfoData
        })
    }

}