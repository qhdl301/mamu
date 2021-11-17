import firebase from 'firebase';

export type CreateReviewRequestType = {
    userName : string;
    movieCd: string;
    uid : string;
    reviewRating : number;
    timeStamp : string;
    review: string;
}

const createReviewService = (requestParam:CreateReviewRequestType)=>{
    const collection = firebase.firestore().collection('movie-review');
    
    return collection.add(requestParam);
  }

  export default createReviewService;