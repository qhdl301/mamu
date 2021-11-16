import firebase from 'firebase';

export type CreateFeedRequestType = {
    uid : string;
    userName: string;
    timeStamp : number;
    movieCd: string;
    movieName: string;
    movieLink: string;
    greatCount: number;
    postfeed: string;
}

const createFeedService = (requestParam:CreateFeedRequestType)=>{
    const collection = firebase.firestore().collection('movie-feed');
    
    return collection.add(requestParam);
  }

  export default createFeedService;