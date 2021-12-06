import firebase from 'firebase';

export type UpdateFeedGreateRequestType = {
    currentUserId : string;
    feedId : string;
}

const DeleteLikeUserService = (requestParam:UpdateFeedGreateRequestType)=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-like-users').doc(requestParam.currentUserId)

    return query.delete();
  }

  export default DeleteLikeUserService;