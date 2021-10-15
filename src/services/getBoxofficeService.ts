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
        movieCd: string,
        imgUrl : string,
        title : string,
        type : string[]
    }[]
}

const getBoxOfficeListService = (url: string, params: GetBoxOfficeListServiceRequestType) => {
    return httpFetcher(url, params, boxOfficeListMock);
};


export default getBoxOfficeListService;