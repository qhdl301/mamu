import { observer } from "mobx-react-lite";
import { FC, useCallback, useState } from "react";
import { FeedStore } from "stores/Feed";
import { dateDiff } from "utils";
import { ComentContainer } from "./FeedComent";
import FeedItem, { FeedItemProps } from "./FeedItem";

export type FeedItemContainerProps = {
    feedItem : FeedStore;
}

const FeedItemContainer : FC<FeedItemContainerProps> = (props) => {
    const {
        feedItem
    } = props;

    const [isFeedComentOpen, setIsFeedComentOpen] = useState(false);

    const handleLikeButtonClick : FeedItemProps['onClickLikeButton'] = useCallback(()=>{ 
        feedItem.putIsLike();
    },[feedItem.isLike]);

    const handleComentOpenClick = useCallback(() => {
        setIsFeedComentOpen((prev) => !prev); // 현재 상태에 대한 prev
    },[]);

    return (
        <FeedItem
            userName={feedItem.feedInfo.userName} 
            movieName={feedItem.feedInfo.movieName} 
            content={feedItem.feedInfo.postfeed}
            isLike={feedItem.isLike}
            likeCount={feedItem.likeCount}
            writeTime={dateDiff(feedItem.feedInfo.timeStamp)} 
            onClickLikeButton={handleLikeButtonClick}
            onClickComentOpenButton={handleComentOpenClick}
       >
            <ComentContainer 
                isOpen={isFeedComentOpen} 
                feedItems={feedItem}
            />
        </FeedItem>
    );
}

export default observer(FeedItemContainer);