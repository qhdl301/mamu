import { FC } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageList, ImageListItem, ImageListItemBar, IconButton, Typography } from '@material-ui/core/';
import { MovieDataArr } from './MovieData';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-left',
      overflow: 'hidden',
      margin : 3,
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      width : '100%',
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

const MoviesList:FC = () => {
  const classes = useStyles();

    return (
      <div className={classes.root}>
        <Typography>'일간 박스오피스'</Typography>
        <ImageList className={classes.imageList} cols={3}>
          {MovieDataArr.map((item) => (
            <ImageListItem key={item.img}>
              <img src={item.img} alt={item.title} />
              <ImageListItemBar
                title={item.title}
                subtitle={<span>#{item.type}</span>}
                classes={{
                  root: classes.titleBar,
                  title: classes.title,
                }}
                actionIcon={
                  <IconButton aria-label={`star ${item.title}`} size='small'>
                    <Link to={"/detail"}>Go Details</Link>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
}

export default MoviesList;