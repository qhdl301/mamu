import firebase from 'firebase';

export type GetFeedLikeCountRequestType = {
    feedId : string;
}

const getFeedLikeCountService = (requestParam:GetFeedLikeCountRequestType['feedId'])=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam)
    .collection('feed-like-users');
    
    return query.get().then(res => {
        return res.docs.length.toString();
    });

  }

  export default getFeedLikeCountService;