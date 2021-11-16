import firebase from 'firebase';

export type GetReviewInfoServiceRequestType = {
    movieCd: string
}

export type FeedInfo = {
    userName : string;
    movieCd: string;
    uid : string;
    reviewRating : number;
    timeStamp : number;
    review: string;
}

export type GetReviewInfoServiceResponseType = Array<FeedInfo>

const getReviewService:(params: GetReviewInfoServiceRequestType) => Promise<GetReviewInfoServiceResponseType> 
 = (params) => {  
    const query = firebase.firestore()
    .collection('movie-review')
    .where('movieCd','==',params.movieCd);
    
    return query.get().then(res=>{
        return res.docs.map(doc=>doc.data()) as GetReviewInfoServiceResponseType;
    })
 }

export default getReviewService;