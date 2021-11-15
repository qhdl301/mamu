import { FC } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, IconButton, makeStyles, Typography } from "@material-ui/core";
import { Favorite as FavoriteIcon, MoreVert as MoreVertIcon, Share as ShareIcon} from '@material-ui/icons/';

export type FeedCardProps = {
    feedPostData: {
        userName : string,
        content: string,
    }
}
const useStyles = makeStyles((theme) => ({
  root: {
    
  }
}));

const FeedCard : FC<FeedCardProps> = (props) => {
    const classes = useStyles();
    const { feedPostData } = props;

    return (
        <Card elevation={1}>
             <CardHeader
                avatar={
                    <Avatar aria-label="recipe"></Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }       
                title={feedPostData.userName}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {feedPostData.content}
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