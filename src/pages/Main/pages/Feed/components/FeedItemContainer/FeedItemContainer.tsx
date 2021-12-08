import { observer } from "mobx-react-lite";
import { FC, useCallback, useState } from "react";
import { FeedStore } from "stores/Feed";
import { dateDiff } from "utils";
import FeedItem, { FeedItemProps } from "./FeedItem";

export type FeedItemContainerProps = {
    feedItem : FeedStore;
}

const FeedItemContainer : FC<FeedItemContainerProps> = (props) => {
    const {
        feedItem
    } = props;

    const [isFeedArcodionOpen, setIsFeedArcodionOpen] = useState(false);

    const handleLikeButtonClick : FeedItemProps['onClickLikeButton'] = useCallback(()=>{ 
        feedItem.putIsLike();
    },[feedItem.isLike]);

    const handleArcodionOpenClick = useCallback(() => {
        setIsFeedArcodionOpen((prev) => !prev); // 현재 상태에 대한 prev
    },[]);

    return (
        <FeedItem
            isOpenFeedArcodion={isFeedArcodionOpen}
            feedId={feedItem.feedInfo.feedId}
            feedComent={feedItem.feedComent}
            userName={feedItem.feedInfo.userName} 
            movieName={feedItem.feedInfo.movieName} 
            content={feedItem.feedInfo.postfeed}
            isLike={feedItem.isLike}
            likeCount={feedItem.likeCount}
            writeTime={dateDiff(feedItem.feedInfo.timeStamp)} 
            onClickLikeButton={handleLikeButtonClick}
            onClickArcodionOpenButton={handleArcodionOpenClick}
       />
    );
}

export default observer(FeedItemContainer);