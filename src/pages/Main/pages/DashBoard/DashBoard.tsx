import { FC, useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, Typography } from '@material-ui/core/';
import { DailyMovieBoxOfficeList } from './components/List';
import { observer } from 'mobx-react-lite';
import { useRootStore } from '../../../../contexts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-left',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
      margin: theme.spacing(1),
      padding: theme.spacing(1),
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
  const classes = useStyles();
  const {movieBoxoffice} = useRootStore();
  const [isMovieListIsLoading, setIsMovieListIsLoading] = useState(true);
  
  useEffect(()=>{
    movieBoxoffice.getMovieItemsData().then(()=>{
      setIsMovieListIsLoading(false);
    });
  },[]);

    return (
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom component="div">일간 박스오피스</Typography>
        <ImageList className={classes.imageList} cols={3} gap={1}>
          <DailyMovieBoxOfficeList items={movieBoxoffice.movieItems} isMovieListIsLoading={isMovieListIsLoading}/>
        </ImageList>
      </div>
    );
})

export default DashBoard;