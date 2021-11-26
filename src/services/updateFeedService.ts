import firebase from 'firebase';

export type UpdateFeedGreateRequestType = {
    uid : string;
    greatYn : boolean;
}

const updateFeedService = (requestParam:UpdateFeedGreateRequestType)=>{
    const query = firebase.firestore()
    .collection('movie-mamu-feed').doc(requestParam.uid);

    return query.update({
        greatYn : requestParam.greatYn
    })
  }

  export default updateFeedService;