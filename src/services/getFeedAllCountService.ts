import firebase from 'firebase';

export type GetFeedCountRequestType = {
    feedId : string;
}

const getFeedAllCountService = (requestParam : GetFeedCountRequestType)=>{
    const collection = firebase.firestore()
    .collection(requestParam.feedId)
    .where('greatYn','==',true)
    
    return collection.get().then((res)=>{
        return res.size;
    });
  }

  export default getFeedAllCountService;