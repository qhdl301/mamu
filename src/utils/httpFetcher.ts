//import axios from "axios";
import { mockData } from "../mocks";
import { MovieListProps } from "../pages/Main/pages/DashBoard/components/List";
import { getBoxOfficeListServiceProps } from "../services";

export const httpFetcher = (url : string, params : getBoxOfficeListServiceProps) : Promise<MovieListProps> => {
    
  return new Promise<MovieListProps>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 > 1) {
        resolve(mockData);
        return;
      }
      reject("error");
    }, 3000);
  });
  
};