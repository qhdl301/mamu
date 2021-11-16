import { FC, useState } from 'react';
import { Box, Fab, makeStyles } from '@material-ui/core';
import FeedCard from './components/FeedCard';
import { Add as AddIcon } from '@material-ui/icons';
import { FormDialog } from "../../../../components/Dialog";

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
  const [open, setOpen] = useState(false);
  
  const handleFormDialogOpenClick = () => {
      setOpen(true);
  };

  const handleCloseButtonClick = () => {
      setOpen(false);
  };

  return (
    <Box className={classes.root} component="div">
    
      <FeedCard feedPostData={{ userName : '김영수', content: '이터널스 너무재밌어용', writeTime : '1시간전', greatCount : 11 } } />
        
      <div>
        <Fab className={classes.fab} color="primary" aria-label="add" onClick={handleFormDialogOpenClick}>
          <AddIcon />
        </Fab>
        <FormDialog type={'feed'} open={open} onFormDialogSubmitClick={() => { alert('submit')}} onFormDialogCloseClick={handleCloseButtonClick}></FormDialog>
      </div>  
    </Box>
  )
}

export default Feed;