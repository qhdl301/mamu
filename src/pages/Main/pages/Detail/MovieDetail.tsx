import { FC } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import { MovieInfo, MovieReview } from './components';


const useStyles = makeStyles({
  root: {
      width: '100%',
      height: '100%',
      margin : 4,
      padding : 4,
  }
});

const MovieDetail:FC = () => {
    
  const clsses = useStyles();

  return (
    <Box className={clsses.root} component="div">
      <MovieInfo/>
      <MovieReview/>
    </Box>
  )
}

export default MovieDetail;