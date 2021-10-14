import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { ImageListItem, ImageListItemBar, Typography } from '@material-ui/core/';
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import { MoviesDetail } from '../../../../../../stores/MovieBoxOffice/MovieBoxoffice';

export type MovieListProps = {
    items : MoviesDetail[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    listItem:{
        margin: theme.spacing(0, 0.5),
        width: 150,
    },
    actionIcon: {
        color: theme.palette.background.paper,
    }
  }),
);

const MovieList : FC<MovieListProps> = (props) => {
    const classes = useStyles();
    const { items } = props;
    const result = items.map(item => item.basicInfo);

    return (
        <>
            {
                result.map((item, index) => (
                    <ImageListItem className={classes.listItem} component={Link} to='/detail' key={index}>
                        <img src={item.imgUrl} alt={item.title} />
                        <ImageListItemBar
                            title={item.title}
                            subtitle={
                                <Typography variant={'caption'}>{item.type.map((item)=>(`#${item}`)).join(' ')}</Typography>
                            }
                            actionPosition='left'
                            actionIcon={
                                <SubdirectoryArrowRightIcon className={classes.actionIcon}/>
                            }
                        />
                    </ImageListItem>
                ))
            }
        </>
    );
}

export default MovieList;