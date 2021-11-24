import { FC, useEffect, useState, useCallback } from 'react';
import { Box, Fab, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useRootStore } from 'contexts';
import { useFireBaseState } from 'contexts';
import { observer } from 'mobx-react-lite';
import { dateDiff } from 'utils';
import { CustmomCircleProgress } from 'components/Progress/Circle';
import { FeedCard, FeedCardProps, FeedDialog, FeedDialogProps } from './components';

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
  const [isCheckFavorite, setIsCheckFavorite] = useState<FeedCardProps['greatYn']>(false);
  const [movieName, setMovieName] = useState<FeedDialogProps['movieName']>("");
  const [feedContent, setFeedContent] = useState<FeedDialogProps['feedData']>("");
  const handleFormDialogOpenClick = useCallback(() => setOpen(true) , []);
  const handleCloseButtonClick = useCallback(() => { 
        setOpen(false); 
        setMovieName(''); 
        setFeedContent(''); 
      }, []);
  const handleFavoriteButtonClick : FeedCardProps['handleFavoriteButtonClick'] = useCallback((index)=>{ 
      console.log(index);
      if(isCheckFavorite === false){
        setIsCheckFavorite(true);
      }else {
        setIsCheckFavorite(false);
      }
  },[isCheckFavorite]);
  const handleMovieNameChange : FeedDialogProps['handleMovieNameChange'] = useCallback((e) => setMovieName(e.target.value), []);
  const handleFeedContentChange : FeedDialogProps['handleFeedContentChange'] = useCallback((e) => setFeedContent(e.target.value) , []);
  const handleSubmitButtonClick = useCallback(() => {
    feed.insertFeedInfo({
      userName: '***',
      uid: firebaseState.user.uid,
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
        <FeedCard 
          key={index} 
          userName={item.userName} 
          movieName={item.movieName} 
          content={item.postfeed} 
          writeTime={dateDiff(item.timeStamp)} 
          greatYn={isCheckFavorite}
          handleFavoriteButtonClick={handleFavoriteButtonClick}
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