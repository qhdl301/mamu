import { action, makeObservable, observable } from 'mobx';
import { createFeedService, updateFeedService, FeedInfo, getFeedService, getFeedAllCountService, UpdateFeedGreateRequestType, CreateFeedRequestType, CreateLikeUsersRequestType, GetFeedCountRequestType } from 'services';
import createLikeUserService from 'services/createLikeUserService';

export default class Feed {

    feedInfos : FeedInfo[] = [];

    constructor() {
        
         makeObservable(this, {
            feedInfos : observable,
            getFeedCount : action,
            getFeedInfos : action,
            insertFeedInfo : action,
            insertLikeUserInfo : action,
            updateFeedInfo : action,
         }); 
    }

    async getFeedInfos() {
        this.feedInfos = await getFeedService();
    }

    async getFeedCount(requestParam : GetFeedCountRequestType) {
        await getFeedAllCountService(requestParam);
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        createFeedService(FeedInfoData).then(() => {
            this.getFeedInfos();
        });
    }

    insertLikeUserInfo(LikeUserInfoData: CreateLikeUsersRequestType) {
        createLikeUserService(LikeUserInfoData);
    }

    updateFeedInfo(FeedInfoData : UpdateFeedGreateRequestType) {
        updateFeedService(FeedInfoData).then(() => {
            this.getFeedInfos();
        });
    }

}