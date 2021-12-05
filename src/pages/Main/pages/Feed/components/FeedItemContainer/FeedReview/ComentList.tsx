import { FC } from "react";
import { Typography, Grid, makeStyles } from '@material-ui/core';

export type ComentListProps = {}

const useStyles = makeStyles((theme) => ({
    root: {
        width : 'auto',
        margin : theme.spacing(2)
    },
    textGrid: {
        display: 'flex',
        flexDirection : 'row',
        flexWrap: 'nowrap',
    },
    
}));

const ComentList: FC = () => {
    const classes = useStyles();

    return (
        <Grid
            className={ classes.root }
            container
            direction="column"
        >
            <Grid
                className= { classes.textGrid }
                container
            >
                <Typography>
                    asdasdasdasd
                </Typography>
            </Grid>
        </Grid>
    )
}

export default ComentList;