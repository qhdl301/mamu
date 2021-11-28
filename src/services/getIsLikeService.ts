import firebase from 'firebase';

export type GetIsLikeRequestType = {
    feedId : string;
    uid : string;
} 

const getIsLikeService = (props : GetIsLikeRequestType) => {  
    const {feedId, uid} = props;

    const query = firebase.firestore()
    .collection('movie-mamu-feed')
    .doc(feedId)
    .collection('feed-like-users').doc(uid)

    return query.get().then(res => res.data());
    
 }

export default getIsLikeService;