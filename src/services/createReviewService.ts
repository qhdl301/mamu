import firebase from 'firebase';

export type CreateReviewRequestType = {
    uid: string;
    movieCd: string;
    reviewRating: number;
    review: string;
    timeStamp: number;
}

const createReviewService = (requestParam:CreateReviewRequestType)=>{
    const collection = firebase.firestore().collection('movie-review');
    
    return collection.add(requestParam);
  }

  export default createReviewService;