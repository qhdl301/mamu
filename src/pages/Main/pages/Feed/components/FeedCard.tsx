import { FC } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardHeaderProps, IconButton, IconButtonProps, makeStyles, Typography } from "@material-ui/core";
import { Favorite as FavoriteIcon, MoreVert as MoreVertIcon, Share as ShareIcon} from '@material-ui/icons/';

export type FeedCardProps = {
    feedId : IconButtonProps['itemID'];
    userName: CardHeaderProps['title'],
    movieName : string;
    greatYn: boolean;
    content: string,
    writeTime : number,
    handleFavoriteButtonClick : IconButtonProps['onClick']
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
        writeTime,
        greatYn,
        handleFavoriteButtonClick,
    } = props;
    
    return (
        <Card 
            className={classes.root} 
            elevation={1}
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
                    variant="subtitle1" 
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
                    {writeTime+'일 전'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    onClick={handleFavoriteButtonClick}
                >
                { 
                    greatYn === false ? 
                    <FavoriteIcon/> 
                    : 
                    <FavoriteIcon style={{color : 'red'}}/>
                }
                </IconButton>
                <IconButton>
                    <ShareIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default FeedCard;