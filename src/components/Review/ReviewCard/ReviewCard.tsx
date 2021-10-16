import { Card, CardHeader,Avatar, IconButton, CardContent } from '@material-ui/core';
import {ThumbUp, ThumbDown} from '@material-ui/icons'
import type {FC, ReactNode} from 'react'
import ReviewContent, { ReviewContentProps } from '../ReviewContent/ReviewContent';
import ReviewRating, { ReviewRatingProps } from '../ReviewRating/ReviewRating';

export type ReviewCardProps = {
    isGood:boolean;
    userName:string;
    reviewsCount:string;
    ratingValue:ReviewRatingProps['ratingValue'];
    reviewContent: ReactNode
}

const ReviewCard:FC<ReviewCardProps> = (props)=>{
    const {isGood, userName, reviewsCount, ratingValue, reviewContent} = props;

    return (
        <Card>
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
                subheader={reviewsCount}
            />
            <ReviewRating reviewTime={`${3} days ago`} ratingValue={ratingValue}/>
            <CardContent>
                <ReviewContent>{reviewContent}</ReviewContent>
            </CardContent>
        </Card>
    )
}

export default ReviewCard;