import firebase from 'firebase';

export type FeedInfo = {
    uid : string;
    userName: string;
    timeStamp : number;
    movieCd: string;
    movieName: string;
    movieLink: string;
    greatCount: number;
    postfeed: string;
}

export type GetFeedInfoServiceResponseType = Array<FeedInfo>

const getReviewService = () => {  
    const query = firebase.firestore()
    .collection('movie-review');
    
    return query.get().then(res=>{
        return res.docs.map(doc=>doc.data()) as GetFeedInfoServiceResponseType;
    })
 }

export default getReviewService;