import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageListItem, ImageListItemBar, IconButton } from '@material-ui/core/';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';

export type MovieListProps = {
    moviesData : {
        imgUrl : string,
        title : string,
        type : string[]
    }[]
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list:{
        width:'33%',
        height:'100%',
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    link: {
        color: theme.palette.background.paper,
    }
  }),
);

const MovieList : FC<MovieListProps> = (props) => {
  
    const classes = useStyles();
    const { moviesData } = props;

    return (
        <>
            {
                moviesData.map((item) => (
                    <ImageListItem key={item.title} className={classes.list}>
                        <img src={item.imgUrl} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={
                            <span>{item.type.map((item)=>(` #${item}`))}</span>
                            }
                            actionIcon={
                            <IconButton aria-label={`info ${item.title}`} size='small' className={classes.icon}>
                                <Link to={"/detail"} className={classes.link}>
                                    <SubdirectoryArrowRightIcon/>
                                </Link>
                            </IconButton>
                            }
                        />
                    </ImageListItem>
                ))
            }
        </>
    );
}

export default MovieList;