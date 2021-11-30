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
    marginLeft : '32px',
    marginRight : '32px',
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
  const userUid = firebaseState.user.uid;
  const { feedList } = useRootStore();
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
  const handleMovieNameChange : FeedDialogProps['onChangeMovieName'] = useCallback((e) => setMovieName(e.target.value), []);
  const handleFeedContentChange : FeedDialogProps['onChangeFeedContent'] = useCallback((e) => setFeedContent(e.target.value) , []);
  const handleSubmitButtonClick = useCallback(() => {
    feedList.insertFeedInfo({
      userName: '***',
      uid: userUid,
      feedId: `${userUid}-${date.getTime()}`,
      timeStamp: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
      movieName: movieName,
      postfeed: feedContent,
    })
    setOpen(false);
  }, [movieName, feedContent]);
  
  useEffect(()=>{
    feedList.getFeedList(userUid).then(() => {
      setFeedLoading(false);
    });
  }, [feedList]);
  
  if (isFeedLoading) {
    return  <CustmomCircleProgress />
  }

  return (
    <Box className={classes.root} component="div">
      {feedList.feedInfos.map((item, index) =>
        <FeedContainer 
          key={index} 
          feedItem ={item}
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
          onChangeMovieName={handleMovieNameChange} 
          onChangeFeedContent={handleFeedContentChange} 
          onClickSubmitButton={handleSubmitButtonClick} 
          onClickCloseButton={handleCloseButtonClick}
        />
      </div>  
    </Box>
  )
}

export default observer(Feed);