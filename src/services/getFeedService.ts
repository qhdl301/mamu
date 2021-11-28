import firebase from 'firebase';

export type FeedInfo = {
    uid : string;
    feedId : string;
    userName: string;
    timeStamp : string;
    movieName: string;
    postfeed: string;
} & FeedPersonalInfo

export type FeedPersonalInfo = {
    isLike:boolean;
}

export type GetFeedInfoServiceResponseType = Array<FeedInfo>

const tmpUid = 'mABdeIiWKXWx5OsbQaNpX0Q1mpd2';

const getFeedService = () => {  
    const query = firebase.firestore()
    .collection('movie-mamu-feed')
    .orderBy('timeStamp');
    
    return query.get().then(res=>{
        return res.docs.map(doc=>doc.data()) as GetFeedInfoServiceResponseType;
    })
 }

export default getFeedService;