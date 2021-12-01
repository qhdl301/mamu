import firebase from 'firebase';

export type GetFeedLikeCountRequestType = {
    feedId : string;
}

const getFeedLikeUserService = (requestParam:GetFeedLikeCountRequestType['feedId'])=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam)
    .collection('feed-like-users');
    
    return query.get().then(res => {
        return res.docs.map(doc => doc.data());
    });

  }

  export default getFeedLikeUserService;