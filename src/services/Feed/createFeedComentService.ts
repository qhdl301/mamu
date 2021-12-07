import firebase from 'firebase';

export type CreateFeedContentRequestType = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    coment: string;
}

const createFeedContentService = (requestParam:CreateFeedContentRequestType)=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-coment')
    
    return query.add(requestParam);
  }

  export default createFeedContentService;