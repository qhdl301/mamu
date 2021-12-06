import { movieDetailMock } from "mocks";
import { httpFetcher } from "utils";

export type GetMovieDetailServiceRequestType = {
    movieCd: string
}

export type GetMovieDetailServiceResponseType = {
    description: string;
}

const getMovieDetailService = (url: string, params: GetMovieDetailServiceRequestType) => {
    return httpFetcher(url, params, movieDetailMock[Number(params.movieCd)]);
};


export default getMovieDetailService;