import { FC } from 'react';
import { Avatar, Grid, IconButton, makeStyles, Paper, Typography } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

export type ProfileProps = {
    userName: string;
    userImg: string;
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(1),
        margin:theme.spacing(1),
        borderRadius:10
    },
    profileContents: {
        color:theme.palette.primary.contrastText
    }
}))

const Profile: FC<ProfileProps> = (props) => {
    const { userImg, userName } = props;
    const classes = useStyles();
    
    return (
        <Paper className={classes.root}>
            <Grid container justify='space-between' spacing={1} alignItems={'center'}>
                <Grid item>
                    <Avatar src={userImg} alt={userName}/>
                </Grid>
                <Grid item>
                    <Typography className={classes.profileContents}>{userName}씨 어서오세요.</Typography>
                </Grid>
                <Grid item>
                    <IconButton size='small' className={classes.profileContents}>
                        <AddCircle></AddCircle>
                    </IconButton>
                </Grid>
            </Grid>
        </Paper>
    )
}

export default Profile;
