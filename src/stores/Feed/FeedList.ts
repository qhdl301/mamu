import { action, makeObservable, observable } from 'mobx';
import { createFeedService, getFeedService, CreateFeedRequestType, CreateLikeUsersRequestType, FeedInfo  } from 'services';
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
        return createFeedService(FeedInfoData).then(() => {
            this.getFeedList(this.clickUserUid);
        });
    }

    insertLikeUserInfo(LikeUserInfoData: CreateLikeUsersRequestType) {
        createLikeUserService(LikeUserInfoData);
    }

}