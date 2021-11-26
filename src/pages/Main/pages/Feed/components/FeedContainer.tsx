import { useRootStore } from "contexts";
import { FC, useState, useCallback} from "react";
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
    const [isCheckFavorite, setIsCheckFavorite] = useState<FeedCardProps['greatYn']>(feedItem.greatYn);
    const handleFavoriteButtonClick : FeedCardProps['handleFavoriteButtonClick'] = useCallback(()=>{ 
        if(isCheckFavorite === false){
            setIsCheckFavorite(true);
            feed.updateFeedInfo({
                uid : feedItem.uid,
                greatYn : true
            });
        }else {
            setIsCheckFavorite(false);
            feed.updateFeedInfo({
                uid : feedItem.uid,
                greatYn : false
            });
        }
    },[isCheckFavorite]);
    
    return (
        <FeedCard
            feedId={feedItem.uid}
            userName={feedItem.userName} 
            movieName={feedItem.movieName} 
            content={feedItem.postfeed} 
            writeTime={dateDiff(feedItem.timeStamp)} 
            greatYn={isCheckFavorite}
            handleFavoriteButtonClick={handleFavoriteButtonClick}
       />
    );
}

export default FeedContainer;