import firebase from 'firebase';

export type GetReviewInfoServiceRequestType = {
    movieCd: string
}

export type ReviewInfo = {
    userName : string;
    movieCd: string;
    uid : string;
    reviewRating : number;
    timeStamp : number;
    review: string;
}

export type GetReviewInfoServiceResponseType = Array<ReviewInfo>

const getReviewService:(url: string, params: GetReviewInfoServiceRequestType) => Promise<GetReviewInfoServiceResponseType> 
 = (url, params) => {  
    const query = firebase.firestore()
    .collection('movie-review')
    .where('movieCd','==',params.movieCd);

    //return Promise
    return query.get().then(res=>{
        // 요기서 실제 데이터가 넘어오네요!?
        console.log('real review',res.docs.map(doc=>doc.data()));
        return res.docs.map(doc=>doc.data()) as GetReviewInfoServiceResponseType;
    })
 }

export default getReviewService;