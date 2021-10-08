import { boxOfficeListMock } from "../mocks";
import { httpFetcher } from "../utils";

export type GetBoxOfficeListServiceRequestType = {
    key: string,
    targetDt: string,
    itemPerPage?: string,
    multiMovieYn?: string,
    repNationCd?: string,
    wideAreaCd?: string
}

export type GetBoxOfficeListServiceResponseType = {
    moviesData : {
        imgUrl : string,
        title : string,
        type : string[]
    }[]
}

export const getBoxOfficeListService = (url: string, params: GetBoxOfficeListServiceRequestType) => {
    return httpFetcher(url, params, boxOfficeListMock);
};