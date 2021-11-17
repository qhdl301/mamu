import { Card, CardHeader,Avatar, CardContent, CardHeaderProps, createStyles, makeStyles } from '@material-ui/core';
import type {FC, ReactNode} from 'react'
import ReviewContent from '../ReviewContent/ReviewContent';
import ReviewRating, { ReviewRatingProps } from '../ReviewRating/ReviewRating';

export type ReviewCardProps = {
    userName:CardHeaderProps['title'];
    reviewRating:ReviewRatingProps['ratingValue'];
    reviewDate: ReviewRatingProps['reviewDate'];
    review: ReactNode
}


const useStyles = makeStyles((theme) => createStyles({
    cardRoot: {
        margin:theme.spacing(1, 0),
    },
}))

const ReviewCard:FC<ReviewCardProps> = (props)=>{
    const {userName, reviewRating, reviewDate, review} = props;
    const classes = useStyles();

    return (
        <Card elevation={1} className={classes.cardRoot}>
             <CardHeader
                avatar={
                    <Avatar></Avatar>
                }
                title={userName}
            />
            <ReviewRating reviewDate ={reviewDate} ratingValue={reviewRating}/>
            <CardContent>
                <ReviewContent>{review}</ReviewContent>
            </CardContent>
        </Card>
    )
}

export default ReviewCard;