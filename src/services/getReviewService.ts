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
    return httpFetcher(url, params, reviewInfoMock);
};


export default getReviewService;