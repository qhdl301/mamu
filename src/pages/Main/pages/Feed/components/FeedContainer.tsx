import { useFireBaseState, useRootStore } from "contexts";
import { observer } from "mobx-react-lite";
import { FC, useState, useCallback } from "react";
import { FeedStore } from "stores/Feed";
import { dateDiff } from "utils";
import { FeedCard, FeedCardProps } from ".";

export type FeedContainerProps = {
    feedItem : FeedStore;
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
                feedId : feedItem.feedInfo.feedId,
                clickUid : firebaseState.user.uid,
            });
        }else {
            setIsCheckFavorite(false);
            feed.insertLikeUserInfo({
                feedId : feedItem.feedInfo.feedId,
                clickUid : firebaseState.user.uid,
            });
        }
    },[isCheckFavorite]);

    return (
        <FeedCard
            feedId={feedItem.feedInfo.feedId}
            userName={feedItem.feedInfo.userName} 
            movieName={feedItem.feedInfo.movieName} 
            content={feedItem.feedInfo.postfeed}
            isLike={feedItem.isLike} 
            writeTime={dateDiff(feedItem.feedInfo?.timeStamp)} 
            handleFavoriteButtonClick={handleFavoriteButtonClick}
       />
    );
}

export default observer(FeedContainer);