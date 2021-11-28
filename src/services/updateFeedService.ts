import firebase from 'firebase';

export type UpdateFeedGreateRequestType = {
    uid : string;
    feedId : string;
}

const updateFeedService = (requestParam:UpdateFeedGreateRequestType)=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed')
    .doc(requestParam.feedId)
    .collection('feed-like-users')
    .doc(requestParam.uid)

    return query.update({
        
    })
  }

  export default updateFeedService;