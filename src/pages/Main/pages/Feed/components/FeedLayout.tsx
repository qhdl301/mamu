import { FC } from 'react';
import { Box, Fab, FabProps, makeStyles } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { CustmomCircleProgress } from 'components/Progress/Circle';

export type FeedLayoutProps = {
    isLoading : boolean;
    onAddFeedClick : FabProps['onClick'];
}

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

const FeedLayout:FC<FeedLayoutProps> = (props) => {
  const classes = useStyles();
  const { children, isLoading, onAddFeedClick } = props;

  if (isLoading) {
    return  <CustmomCircleProgress />
  }

  return (
    <Box className={classes.root} component="div">
      { children }
        <Fab 
          className={classes.fab} 
          color="primary" 
          onClick={onAddFeedClick}
        >
          <AddIcon />
        </Fab>
    </Box>
  )
}

export default FeedLayout;