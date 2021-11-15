import { FC } from 'react';
import { Box, Fab, makeStyles } from '@material-ui/core';
import FeedCard from './components/FeedCard';
import { Add as AddIcon }  from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    height: '100%',
    margin: theme.spacing(2.5),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(9),
    right: theme.spacing(3)
  }
}));

const Feed:FC = () => {
    
  const classes = useStyles();

  return (
    <Box className={classes.root} component="div">
    
      <FeedCard feedPostData={{ userName : '김영수', content: '이터널스 너무재밌어용', writeTime : '1시간전' } } />
      
      <Fab className={classes.fab} color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Box>
  )
}

export default Feed;