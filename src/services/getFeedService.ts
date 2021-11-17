import firebase from 'firebase';

export type FeedInfo = {
    uid : string;
    userName: string;
    timeStamp : string;
    movieName: string;
    greatCount: number;
    postfeed: string;
}

export type GetFeedInfoServiceResponseType = Array<FeedInfo>

const getReviewService = () => {  
    const query = firebase.firestore()
    .collection('movie-feed');
    
    return query.get().then(res=>{
        return res.docs.map(doc=>doc.data()) as GetFeedInfoServiceResponseType;
    })
 }

export default getReviewService;