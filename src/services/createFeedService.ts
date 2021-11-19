import firebase from 'firebase';

export type CreateFeedRequestType = {
    uid : string;
    userName: string;
    timeStamp : string;
    movieName: string;
    greatCount: number;
    postfeed: string;
}

const createFeedService = (requestParam:CreateFeedRequestType)=>{
    const collection = firebase.firestore().collection('mamu-movie-feed');
    
    return collection.add(requestParam);
  }

  export default createFeedService;