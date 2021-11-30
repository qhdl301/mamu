import firebase from 'firebase';

export type CreateLikeUsersRequestType = {
    currentUserId : string;
    feedId : string;
}

const createLikeUserService = (requestParam:CreateLikeUsersRequestType)=>{
    const collection = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-like-users').doc(requestParam.currentUserId);
    
    return collection.set(requestParam);
  }

  export default createLikeUserService;



