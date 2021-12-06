import { FC, useEffect, useState, useCallback } from 'react';
import { useMainStore } from 'contexts';
import { observer } from 'mobx-react-lite';
import { AddDialogContainer, FeedItemContainer } from './components';
import FeedLayout from './components/FeedLayout';

const Feed:FC = () => {
  const { feedList } = useMainStore();
  const [isFeedLoading, setFeedLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const handleFeedAddClick = useCallback(() => setOpen(true) , []);
  const handleFeedCloseEvent = useCallback(() => setOpen(false) , []);
  
  useEffect(()=>{
    setFeedLoading(true);
    feedList.getFeedList().then(() => {
      setFeedLoading(false);
    });
  }, [feedList]);
  
  return (
    <FeedLayout 
      isLoading={isFeedLoading} 
      onAddFeedClick={handleFeedAddClick}
    >
      {feedList.feedInfos.map((item, index) =>
        <FeedItemContainer 
          key={index} 
          feedItem ={item}
        />
      )}
      <AddDialogContainer 
        open={open} 
        onSubmitComplete={handleFeedCloseEvent} 
        onCancel={handleFeedCloseEvent}
      />
    </FeedLayout>
  )
}

export default observer(Feed);