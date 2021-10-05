import { FC, useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, Typography } from '@material-ui/core/';
import { MovieList, MovieListProps } from './components/List';
import { getBoxOfficeListService } from '../../../../services';
import { moviesData } from '../../../../mocks';

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

const DashBoard: FC = () => {
  
  const [list, setList] = useState<MovieListProps>(moviesData);

  useEffect(()=>{
    getBoxOfficeListService("http://", { key: "", targetDt: "" }).then((response) => {
      if (response) {
        console.log(response);
        setList(response);     
      }
    })
  },[]);

  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography>일간 박스오피스</Typography>
        <ImageList className={classes.imageList} cols={3} gap={1}>
          <MovieList moviesData={list}/>
        </ImageList>
      </div>
    );
}

export default DashBoard;