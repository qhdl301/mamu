import { FC } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardHeaderProps, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Favorite as FavoriteIcon, MoreVert as MoreVertIcon, Share as ShareIcon} from '@material-ui/icons/';

export type FeedCardProps = {
    userName: CardHeaderProps['title'],
    movieName : string;
    greatCount: number;
    content: string,
    writeTime : number,
}

const useStyles = makeStyles((theme) => ({
    root: {
        position : 'relative',
        width: '100%',
        height: '100%',
        marginTop : theme.spacing(1),
    }
  }));

const FeedCard : FC<FeedCardProps> = (props) => {
    const classes = useStyles();
    const {
        userName,
        movieName,
        content,
        writeTime } = props;
    
    return (
        <Card className={classes.root} elevation={1}>
             <CardHeader
                avatar={
                    <Avatar aria-label="recipe"></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }       
                title={userName}
            />
            <CardContent>
                <Typography variant="subtitle1" color="textPrimary" component="p">
                    {movieName}
                </Typography>
                <Typography variant="body1" color="textSecondary" component="p">
                    {content}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary" component="p">
                    {writeTime+'일 전'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default FeedCard;