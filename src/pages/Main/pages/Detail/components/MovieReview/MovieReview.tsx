import { FC, useState, useEffect } from "react";
import { Box, CircularProgress, makeStyles } from "@material-ui/core";
import { ReviewCard } from "../../../../../../components";
import { MovieDetail } from "../../../../../../stores";

const useStyles = makeStyles((theme)=>(
    {
        root: {
            marginTop: theme.spacing(1),
            width : '100%',
            height: '400px',
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
                <CircularProgress/>
            ) : (
                targetMovie.reviewInfos.map((item, index) => (
                    <ReviewCard 
                        key = {index}
                        userName = {item.userName}
                        isGood = {item.isGood}
                        reviewsCount = {item.reviewsCount}
                        ratingValue = {Number(item.ratingValue)}
                        reviewDate = {item.reviewDate}
                        reviewContent = {item.reviewContent}
                    />
                ))
            )
            }
       </Box>
    )

}

export default MovieReview;