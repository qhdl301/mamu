import { FC } from "react";
import { makeStyles, Typography, Card, CardContent, IconButton, Grid, Divider} from '@material-ui/core';
import { MoreHoriz as MoreHorizIcon, Schedule as ScheduleIcon} from '@material-ui/icons';

export type ComentItemProps = {
    name: string;
    coment: string;
    timeStamp: string;
};

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

const ComentList: FC<ComentItemProps> = (props) => {
    const classes = useStyles();
    const { name, coment, timeStamp } = props;

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
                        {name}
                    </Typography>
                    <Typography 
                        variant="body1" 
                        color="textPrimary"
                        component="p"
                        gutterBottom
                    >
                        {coment}
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
                            {timeStamp} 일 전
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