import firebase from 'firebase';

export type CreateFeedContentRequestType = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    coment: string;
}

const createFeedContentService = (requestParam:CreateFeedContentRequestType)=>{
    const collection = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-coment')
    
    return collection.add(requestParam);
  }

  export default createFeedContentService;