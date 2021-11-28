import firebase from 'firebase';

export type CreateFeedRequestType = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    movieName: string;
    postfeed: string;
}

const createFeedService = (requestParam:CreateFeedRequestType)=>{
    const collection = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId);
    
    return collection.set(requestParam);
  }

  export default createFeedService;