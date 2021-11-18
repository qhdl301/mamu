import { FC, useEffect, useState } from 'react';
import { Box, Fab, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import FeedCard from './components/FeedCard';
import { FormDialog, FormDialogProps } from "../../../../components/Dialog";
import { useRootStore } from '../../../../contexts';
import { useFireBaseState } from "../../../../contexts";
import { observer } from 'mobx-react-lite';
import { dateDiff } from '../../../../utils';
import { CustmomCircleProgress } from '../../../../components/Progress/Circle';

export type FormDialogFeedItem = {
  movieName : string;
  postFeed : string;
}

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
  const classes = useStyles();
  const firebaseState = useFireBaseState();
  const [open, setOpen] = useState(false);
  const [isFeedLoading, setFeedLoading] = useState(true);
  const [movieName, setMovieName] = useState<FormDialogFeedItem['movieName']>("");
  const [postFeed, setPostFeed] = useState<FormDialogFeedItem['postFeed']>("");
  const { feedPost } = useRootStore();
  const date = new Date();

  useEffect(()=>{
    feedPost.getFeedInfos().then(() => {
      setFeedLoading(false);
    });
  }, []);
  
  const handleFormDialogOpenClick = () => {
    setOpen(true);
  };

  const changeMovieData = (movieData : FormDialogFeedItem['movieName']) => {
    setMovieName(movieData);
  }

  const changePostFeedData = (feedData : FormDialogFeedItem['postFeed']) => {
    setPostFeed(feedData);
  }

  const handleSubmitButtonClick: FormDialogProps['onFormDialogSubmitClick'] = () => {
    feedPost.insertFeedInfo({
      userName: '***',
      uid: firebaseState.user.uid,   
      timeStamp: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`,
      movieName : movieName,
      greatCount: Number(1),
      postfeed: postFeed,
    });
    setOpen(false);
  }

  const handleCloseButtonClick = () => {
      setOpen(false);
  };

  return (
    <>
      {
        isFeedLoading ?
          <CustmomCircleProgress />
          :
          <Box className={classes.root} component="div">
            {feedPost.feedInfos.map((item, index) => 
              <FeedCard key={index} feedPostData={{ userName: item.userName, movieName: item.movieName, content: item.postfeed, writeTime: dateDiff(item.timeStamp), greatCount: Number(item.greatCount)}} />
            )}
            <div>
              <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleFormDialogOpenClick}>
                <AddIcon />
              </Fab>
              <FormDialog type={'feed'} open={open} movieName={movieName} postFeed={postFeed} changeMovieData={changeMovieData} changePostFeedData={changePostFeedData} onFormDialogSubmitClick={handleSubmitButtonClick} onFormDialogCloseClick={handleCloseButtonClick}></FormDialog>
            </div>  
          </Box>
      }
    </>  
  )
}

export default observer(Feed);