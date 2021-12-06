import firebase from 'firebase';

export type GetIsLikeRequestType = {
    feedId : string;
    currentUserId : string;
} 

const getIsLikeService = (props : GetIsLikeRequestType) => {  
    const {feedId, currentUserId} = props;

    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(feedId)
    .collection('feed-like-users').doc(currentUserId)

    return query.get().then(res => res.data());
    
 }

export default getIsLikeService;