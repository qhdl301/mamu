import { FC, useEffect } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, Typography } from '@material-ui/core/';
import { MovieList } from './components/List';
import { observer } from 'mobx-react-lite';
import RootStore from '../../../../stores/MovieBoxOffice/RootStore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-left',
      overflow: 'hidden',
      margin : 1,
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width : '100%',
      height : '200px',
      flexWrap: 'nowrap',
      transform: 'translateZ(0)'
    }
  }),
);

const DashBoard: FC = observer(() => {

  const { MovieBoxoffice } = RootStore;
  const { getMovieItemsData, movieItems } = MovieBoxoffice;

  useEffect(()=>{
    getMovieItemsData();
  },[]);

  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom component="div">일간 박스오피스</Typography>
        <ImageList className={classes.imageList} cols={3} gap={1}>
          <MovieList items={movieItems}/>
        </ImageList>
      </div>
    );
})

export default DashBoard;