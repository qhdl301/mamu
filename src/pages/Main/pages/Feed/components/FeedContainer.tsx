import { observer } from "mobx-react-lite";
import { FC, useCallback } from "react";
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

    const handleFavoriteButtonClick : FeedCardProps['handleFavoriteButtonClick'] = useCallback(()=>{ 
        feedItem.putIsLike();
    },[feedItem.isLike]);

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