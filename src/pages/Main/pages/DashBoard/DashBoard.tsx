import { FC, useEffect, useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, Typography } from '@material-ui/core/';
import { MovieList } from './components/List';
import { GetBoxOfficeListServiceResponseType } from '../../../../services/getBoxofficeService';

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
  const [items, setItems] = useState<GetBoxOfficeListServiceResponseType['moviesData']>([]);

  useEffect(()=>{
    
    /*getBoxOfficeListService("", { key: "", targetDt: "" }).then((response) => {
      if (response) {
        setItems(response.moviesData);     
      }
    })*/
  },[]);

  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography variant="h6" gutterBottom component="div">일간 박스오피스</Typography>
        <ImageList className={classes.imageList} cols={3} gap={1}>
          <MovieList items={items}/>
        </ImageList>
      </div>
    );
}

export default DashBoard;