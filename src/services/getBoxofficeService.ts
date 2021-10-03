import { moviesData } from "../mocks";
import { httpFetcher } from "../utils";

export const getBoxOfficeListService = (url :string, params:object) => {
    return httpFetcher(url, {params}, moviesData);
};