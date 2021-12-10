import { FC } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardHeaderProps, IconButton, IconButtonProps, makeStyles, Typography } from "@material-ui/core";
import { Favorite as FavoriteIcon, MoreVert as MoreVertIcon, Share as ShareIcon, Sms as SmsIcon, Schedule as ScheduleIcon } from '@material-ui/icons/';

export type FeedItemProps = {
    userName: CardHeaderProps['title'],
    movieName : string,
    content: string,
    likeCount: number,
    isLike: boolean,
    writeTime : number,
    onClickLikeButton : IconButtonProps['onClick'],
    onClickComentOpenButton : IconButtonProps['onClick'],
}

const useStyles = makeStyles((theme) => ({
    root: {
        position : 'relative',
        width: '100%',
        height: '100%',
        marginTop : theme.spacing(1),
    },
    scheduleIcon :{
        margin : theme.spacing(0.5),
        fontSize : 'small'
    }
}));

const FeedItem : FC<FeedItemProps> = (props) => {
    const classes = useStyles();
    const {
        children,
        userName,
        movieName,
        content,
        isLike,
        likeCount,
        writeTime,
        onClickLikeButton,
        onClickComentOpenButton
    } = props;
    
    return (
        <Card 
            className={classes.root}
            elevation={3}
        >
            <CardHeader
                avatar={
                    <Avatar/>
                }
                action={
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                }       
                title={userName}
            />
            <CardContent>
                <Typography 
                    variant="subtitle2" 
                    color="textPrimary" 
                    component="p"
                >
                    좋아요 {likeCount} 개
                </Typography>
                <Typography 
                    variant="h6" 
                    color="textPrimary" 
                    component="p"
                >
                    {movieName}
                </Typography>
                <Typography 
                    variant="body1" 
                    color="textSecondary" 
                    component="p"
                >
                    {content}
                </Typography>
                <Typography 
                    variant="subtitle2" 
                    color="textSecondary" 
                    component="p"
                >
                    <ScheduleIcon className={classes.scheduleIcon}/>
                    {writeTime+'일 전'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={onClickLikeButton}
                >
                    <FavoriteIcon style={isLike ? {color : 'red'} : {color : ''}}/>
                </IconButton>
                <IconButton
                    onClick={onClickComentOpenButton}
                >
                    <SmsIcon/>
                </IconButton>
                 <IconButton>
                    <ShareIcon/>
                </IconButton>
            </CardActions>
            { children }
        </Card>
    );
}

export default FeedItem;