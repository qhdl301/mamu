import { FC } from "react";
import { makeStyles, Typography, Card, CardContent, IconButton, Grid, Divider} from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon, Schedule as ScheduleIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        border : 0,
        outline : 0,
        margin : theme.spacing(0.5),
    },
    contentArea : {
        margin : theme.spacing(0),
    },
    actionArea : {
        alignItems : 'center',
    },
    scheduleIcon :{
        margin : theme.spacing(0.5),
        fontSize : 'small'
    }
}));

const ComentList: FC = () => {
    const classes = useStyles();

    return (
        <>
            <Divider />
            <Card
                className={classes.root}
                elevation={0}
            >
                <CardContent>
                    <Typography 
                        variant="body2" 
                        color="textSecondary"
                        component="p"
                        gutterBottom
                    >
                        {'김XX'}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        color="textPrimary"
                        component="p"
                        gutterBottom
                    >
                        {'세상은 아름답다?'}
                    </Typography>
                    <Grid
                        className={classes.actionArea}
                        container
                        direction="row"
                        justifyContent="space-between"
                    >
                        <Typography 
                            variant="body2" 
                            color="textSecondary"
                            component="p"
                        >
                            <ScheduleIcon 
                                className={classes.scheduleIcon}
                            />
                            {'1시간'}
                        </Typography>
                        <IconButton>
                            <MoreHorizIcon/>
                        </IconButton>
                    </Grid>
                </CardContent>
            </Card>
        </>
    )
}

export default ComentList;