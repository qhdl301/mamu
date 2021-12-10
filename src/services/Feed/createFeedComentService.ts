import firebase from 'firebase';

export type CreateFeedComentRequestType = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    coment: string;
}

const createFeedComentService = (requestParam:CreateFeedComentRequestType)=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.feedId)
    .collection('feed-coment')
    
    return query.add(requestParam);
  }

  export default createFeedComentService;