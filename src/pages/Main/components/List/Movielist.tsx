import { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from '@material-ui/core/';
import { MovieDataArr } from './MovieData';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      flexWrap: 'nowrap',
      transform: 'translateZ(0)',
    },
    title: {
      color: theme.palette.primary.light,
    },
    titleBar: {
      background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
  }),
);

const MoviepoastList:FC = () => {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography>{'금주 박스오피스'}</Typography>
        <ImageList className={classes.imageList} cols={2.5}>
          {MovieDataArr.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>by: {item.type}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`}>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
}

export default MoviepoastList;