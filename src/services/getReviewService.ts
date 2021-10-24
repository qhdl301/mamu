import firebase from 'firebase';
import { reviewInfoMock } from "../mocks";
import { httpFetcher } from "../utils";

export type GetReviewInfoServiceRequestType = {
    movieCd: string
}

export type GetReviewInfoServiceResponseType = {
    isGood:boolean;
    userName : string;
    reviewsCount : string;
    ratingValue : string;
    reviewDate : string;
    reviewContent: string;
}

const getReviewService = (url: string, params: GetReviewInfoServiceRequestType) => {
    const query = firebase.firestore()
    .collection('movie-review')
    .where('movieCd','==',params.movieCd);

    query.get().then(res=>{
        // 요기서 실제 데이터가 넘어오네요!?
        console.log('real review',res.docs.map(doc=>doc.data()));
    });

    return httpFetcher(url, params, reviewInfoMock);
};


export default getReviewService;