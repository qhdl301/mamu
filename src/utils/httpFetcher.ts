//import axios from "axios";

export const httpFetcher = <RequestType, ResponseType>(
  url : string, 
  params : RequestType,
  temporaryMock: ResponseType
  ) : Promise<ResponseType> => {
  return new Promise<ResponseType>((resolve) => {
    setTimeout(()=>{
      resolve(temporaryMock);
    },3000)
  });
};