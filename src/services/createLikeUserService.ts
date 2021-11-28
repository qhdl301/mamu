import firebase from 'firebase';

export type CreateLikeUsersRequestType = {
    clickUid : string;
    feedId : string;
}

const createLikeUserService = (requestParam:CreateLikeUsersRequestType)=>{
    const collection = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-like-users').doc(requestParam.clickUid);
    
    return collection.set(requestParam);
  }

  export default createLikeUserService;