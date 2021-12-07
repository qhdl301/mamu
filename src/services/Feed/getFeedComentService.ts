import firebase from 'firebase';

export type FeedComentInfo = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    coment: string;
}

export type GetFeedComentServiceResponseType = Array<FeedComentInfo>

const getFeedComentService = (feedId:string) => {  
    const query = firebase.firestore()
    .collection('movie-mamu-feed')
    .doc(feedId)
    .collection('feed-content')
    .orderBy('timeStamp');
    
    return (
        
        query.get().then(res => {        
            return res.docs.map(
                doc => doc.data()
            ) as GetFeedComentServiceResponseType;
        
        })
    )
 }

export default getFeedComentService;