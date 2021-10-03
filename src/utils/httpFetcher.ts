import axios from "axios";

export const httpFetcher  = async (url : string, params : object, mockingData : object) => {
    return await new Promise((resolve, reject) => {
      
      /*
      axios.post(url,
        {
          params
        },
        { 
          headers:{ 
            'Content-type': 'application/json', 
            'Accept': 'application/json' 
          } 
        }
      )
      */
      
      setTimeout(() => {
        if (Math.random() * 10 > 1) {
          resolve(mockingData);
          return;
        }
        reject("error");
      }, 3000);
    });
  };