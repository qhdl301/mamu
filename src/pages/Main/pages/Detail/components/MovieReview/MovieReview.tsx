import { FC, useState, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { ReviewCard } from "../../../../../../components";
import { MovieDetail } from "../../../../../../stores";
import { CustmomCircleProgress } from "../../../../../../components/Progress/Circle";
import { observer } from "mobx-react-lite";
import { dateDiff } from "../../../../../../utils";

export type MaskingData = {
    userName : string;
}

const useStyles = makeStyles((theme)=>(
    {
        root: {
            marginTop: theme.spacing(1),
            width : '100%',
            height: '40%',
            overflowY : 'scroll',
        },
      }
));


export type MovieReviewProps = {
    targetMovie : MovieDetail
}

const MovieReview : FC<MovieReviewProps> = (props) => {
    const classes = useStyles(); 
    const {targetMovie} = props;
    const [isMovieReviewInfosLoading, setIsMovieReviewInfosLoading] = useState(true);

    useEffect(()=>{
        setIsMovieReviewInfosLoading(true);
        targetMovie.getReviewInfos().then(()=>{
            setIsMovieReviewInfosLoading(false);
        });
    },[targetMovie]);

    return (
       <Box className={classes.root}>
           {
            isMovieReviewInfosLoading ? (
                <CustmomCircleProgress/>
            ) : (
                targetMovie.reviewInfos.map((item, index) => (
                    <ReviewCard 
                        key = {index}
                        userName = {item.userName}
                        reviewRating = {Number(item.reviewRating)}
                        reviewDate = {dateDiff(item.timeStamp)}
                        review = {item.review}
                    />
                ))
            )
            }
       </Box>
    )

}

export default observer(MovieReview);