import { Card, CardHeader,Avatar, IconButton, CardContent, CardHeaderProps, createStyles, makeStyles } from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons'
import type {FC, ReactNode} from 'react'
import ReviewContent from '../ReviewContent/ReviewContent';
import ReviewRating, { ReviewRatingProps } from '../ReviewRating/ReviewRating';

export type ReviewCardProps = {
    isGood:boolean;
    userName:CardHeaderProps['title'];
    reviewsCount:CardHeaderProps['subheader'];
    ratingValue:ReviewRatingProps['ratingValue'];
    reviewDate: ReviewRatingProps['reviewDate'];
    reviewContent: ReactNode
}


const useStyles = makeStyles((theme) => createStyles({
    cardRoot: {
        margin:theme.spacing(1, 0),
    },
}))

const ReviewCard:FC<ReviewCardProps> = (props)=>{
    const {isGood, userName, reviewsCount, ratingValue, reviewDate, reviewContent} = props;
    const classes = useStyles();

    return (
        <Card elevation={1} className={classes.cardRoot}>
             <CardHeader
                avatar={
                    <Avatar></Avatar>
                }
                action={
                    <>
                    <IconButton >
                        <ThumbUp color={isGood ? 'primary' : 'inherit'}/>
                    </IconButton>
                    <IconButton >
                        <ThumbDown  color={!isGood ? 'primary' : 'inherit'}/>
                    </IconButton>
                    </>
                }
                title={userName}
                subheader={`${reviewsCount} reviews`}
            />
            <ReviewRating reviewDate ={`${reviewDate} days ago`} ratingValue={ratingValue}/>
            <CardContent>
                <ReviewContent>{reviewContent}</ReviewContent>
            </CardContent>
        </Card>
    )
}

export default ReviewCard;