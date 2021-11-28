import { action, makeObservable, observable } from 'mobx';
import { createFeedService, updateFeedService, getFeedService, UpdateFeedGreateRequestType, CreateFeedRequestType, CreateLikeUsersRequestType, FeedInfo } from 'services';
import createLikeUserService from 'services/createLikeUserService';
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
            insertLikeUserInfo : action,
            updateFeedInfo : action,
         }); 
    }

    async getFeedList(userUid : FeedInfo['uid']) {
        const response = await getFeedService();
        this.clickUserUid = userUid;

        try {
            this.feedInfos = response.map(item => new FeedStore(item, this.clickUserUid));
        } catch (error) {
            return console.log(error);
        }
    }

    insertFeedInfo(FeedInfoData: CreateFeedRequestType) {
        createFeedService(FeedInfoData).then(() => {
            this.getFeedList(this.clickUserUid);
        });
    }

    insertLikeUserInfo(LikeUserInfoData: CreateLikeUsersRequestType) {
        createLikeUserService(LikeUserInfoData);
    }

    updateFeedInfo(FeedInfoData : UpdateFeedGreateRequestType) {
        updateFeedService(FeedInfoData).then(() => {
            this.getFeedList(this.clickUserUid);
        });
    }

}