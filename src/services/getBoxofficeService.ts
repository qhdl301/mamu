import { httpFetcher } from "../utils";

export type getBoxOfficeListServiceProps = {
    key: string,
    targetDt: string,
    itemPerPage?: string,
    multiMovieYn?: string,
    repNationCd?: string,
    wideAreaCd?: string
}

export const getBoxOfficeListService = (url: string, params: getBoxOfficeListServiceProps) => {
    return httpFetcher(url, params);
};