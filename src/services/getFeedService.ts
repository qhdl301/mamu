import firebase from 'firebase';

export type FeedInfo = {
    uid : string;
    userName: string;
    timeStamp : string;
    greatYn : boolean;
    movieName: string;
    postfeed: string;
}

export type GetFeedInfoServiceResponseType = Array<FeedInfo>

const getReviewService = () => {  
    const query = firebase.firestore()
    .collection('movie-mamu-feed')
    .orderBy('timeStamp');
    
    return query.get().then(res=>{
        return res.docs.map(doc=>doc.data()) as GetFeedInfoServiceResponseType;
    })
 }

export default getReviewService;