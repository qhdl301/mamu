import { useFireBaseState, useRootStore } from "contexts";
import { FC, useState, useCallback } from "react";
import { FeedInfo } from "services";
import { dateDiff } from "utils";
import { FeedCard, FeedCardProps } from ".";

export type FeedContainerProps = {
    feedItem : FeedInfo;
}

const FeedContainer : FC<FeedContainerProps> = (props) => {
    const {
        feedItem
    } = props;
    const { feed } = useRootStore();
    const firebaseState = useFireBaseState();
    const [isCheckFavorite, setIsCheckFavorite] = useState(false);
    const handleFavoriteButtonClick : FeedCardProps['handleFavoriteButtonClick'] = useCallback(()=>{ 
        if(isCheckFavorite === false){
            setIsCheckFavorite(true);
            feed.insertLikeUserInfo({
                feedId : feedItem.feedId,
                clickUid : firebaseState.user.uid,
            });
        }else {
            setIsCheckFavorite(false);
            feed.insertLikeUserInfo({
                feedId : feedItem.feedId,
                clickUid : firebaseState.user.uid,
            });
        }
    },[isCheckFavorite]);
    

    return (
        <FeedCard
            feedId={feedItem.feedId}
            userName={feedItem.userName} 
            movieName={feedItem.movieName} 
            content={feedItem.postfeed} 
            writeTime={dateDiff(feedItem.timeStamp)} 
            handleFavoriteButtonClick={handleFavoriteButtonClick}
       />
    );
}

export default FeedContainer;