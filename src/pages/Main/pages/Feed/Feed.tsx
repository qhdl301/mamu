import { FC, useEffect, useState, useCallback } from 'react';
import { Box, Fab, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useRootStore } from 'contexts';
import { useFireBaseState } from 'contexts';
import { observer } from 'mobx-react-lite';
import { CustmomCircleProgress } from 'components/Progress/Circle';
import { FeedContainer, FeedDialog, FeedDialogProps } from './components';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    height: '100%',
    marginLeft : 'auto',
    marginRight : 'auto',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(9),
    right: theme.spacing(3)
  }
}));

const Feed:FC = () => {
  const date = new Date();
  const classes = useStyles();
  const firebaseState = useFireBaseState();
  const { feed } = useRootStore();
  const [isFeedLoading, setFeedLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [movieName, setMovieName] = useState<FeedDialogProps['movieName']>("");
  const [feedContent, setFeedContent] = useState<FeedDialogProps['feedData']>("");
  const handleFormDialogOpenClick = useCallback(() => setOpen(true) , []);
  const handleCloseButtonClick = useCallback(() => { 
        setOpen(false); 
        setMovieName(''); 
        setFeedContent(''); 
      }, []);
  const handleMovieNameChange : FeedDialogProps['handleMovieNameChange'] = useCallback((e) => setMovieName(e.target.value), []);
  const handleFeedContentChange : FeedDialogProps['handleFeedContentChange'] = useCallback((e) => setFeedContent(e.target.value) , []);
  const handleSubmitButtonClick = useCallback(() => {
    feed.insertFeedInfo({
      userName: '***',
      uid: firebaseState.user.uid,
      feedId: `${firebaseState.user.uid}-${date.getTime()}`,
      timeStamp: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      movieName: movieName,
      postfeed: feedContent,
    })
    setOpen(false);
  }, [movieName, feedContent]);
  
  useEffect(()=>{
    feed.getFeedInfos().then(() => {
      setFeedLoading(false);
    });
  }, [feed]);
  
  if (isFeedLoading) {
    return  <CustmomCircleProgress />
  }

  return (
    <Box className={classes.root} component="div">
      {feed.feedInfos.map((item, index) =>
        <FeedContainer 
          key={index} 
          feedItem={item}
        />
      )}
      <div>
        <Fab 
          className={classes.fab} 
          color="primary" 
          onClick={handleFormDialogOpenClick}
        >
          <AddIcon />
        </Fab>
        <FeedDialog 
          open={open} 
          movieName={movieName} 
          feedData={feedContent} 
          handleMovieNameChange={handleMovieNameChange} 
          handleFeedContentChange={handleFeedContentChange} 
          handleFormDialogSubmitClick={handleSubmitButtonClick} 
          handleFormDialogCloseClick={handleCloseButtonClick}
        />
      </div>  
    </Box>
  )
}

export default observer(Feed);