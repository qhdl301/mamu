import firebase from 'firebase';

export type CreateFeedRequestType = {
    uid : string;
    userName: string;
    timeStamp : string;
    greatYn : boolean;
    movieName: string;
    postfeed: string;
}

const createFeedService = (requestParam:CreateFeedRequestType)=>{
    const collection = firebase.firestore()
    .collection('movie-mamu-feed');
    
    return collection.add(requestParam);
  }

  export default createFeedService;