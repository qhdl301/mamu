import { FC, useState, useCallback } from "react";
import { Accordion, AccordionSummary, Box, Button, Card, CardContent, CardMedia, Grid, makeStyles, Typography } from "@material-ui/core";
import { ArrowDropDown as ArrowDropDownIcon } from '@material-ui/icons';
import { CustmomCircleProgress } from "components/Progress/Circle";
import { MovieDetail } from "stores";
import { useFireBaseState } from "contexts";
import { ReviewDialog, ReviewDialogProps } from "../MovieReview";

const useStyles = makeStyles((theme) => ({
    img: {
        position: 'relative',
    },
    info: {
        position: 'relative',
    },
    button: {
        bottom: theme.spacing(0.5),
    }
}));

export type MovieInfoProps = {
    targetMovie : MovieDetail;
    isDetailInfoLoading:boolean;
}

const MovieInfo: FC<MovieInfoProps> = (props) => {
    const date = new Date();
    const classes = useStyles();
    const firebaseState = useFireBaseState();
    const { isDetailInfoLoading, targetMovie } = props;
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState<ReviewDialogProps['rating']>(0);
    const [reviewDescribe, setReviewDescribe] = useState<ReviewDialogProps['reviewDescribe']>("");
    const handleFormDialogOpenClick = useCallback(() => setOpen(true), []);
    const handleCloseButtonClick = useCallback(() => {
            setOpen(false);
            setRating(0);
            setReviewDescribe('');
    }, []);
    const onRatingDataChange: ReviewDialogProps['onRatingDataChange'] = useCallback((e) => setRating(Number(e.target.value)), []);
    const onReviewDataChange : ReviewDialogProps['onReviewDataChange'] = useCallback((e) =>  setReviewDescribe(e.target.value), []);
    const handleSubmitButtonClick: ReviewDialogProps['onFormDialogSubmitClick'] = useCallback(() => {
        targetMovie.insertReviewInfo({
            userName: '***',
            uid: firebaseState.user.uid,
            timeStamp: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
            reviewRating: rating,
            review: reviewDescribe,
        });
        setOpen(false);
    }, [rating, reviewDescribe]);
  
    return (
        <Card>
            <Grid container >
                <Grid item sm={5}>
                    <CardMedia
                        className = {classes.img}
                        component = "img"
                        alt = "movie image"
                        image = {targetMovie.basicInfo.imgUrl}
                    />
                </Grid>
                <Grid item sm={7}>
                    <CardContent
                        className = {classes.info}
                    >
                        <Typography noWrap gutterBottom variant="h5" component="div">
                            {targetMovie.basicInfo.title}
                        </Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ArrowDropDownIcon />}
                            >   
                                {isDetailInfoLoading ? (
                                    <CustmomCircleProgress/>
                                )
                                : (
                                    <Typography variant="body2"> 
                                        {targetMovie.detailInfo?.description}
                                    </Typography>
                                )}
                            </AccordionSummary>
                        </Accordion>
                        <br/>
                        <Typography noWrap gutterBottom variant="subtitle2" component="div">
                            목표 영화 수 {30}/{30}
                        </Typography>
                        <Typography noWrap gutterBottom variant="subtitle2" component="div">
                            목포 영화 수 {30}/{30}
                        </Typography>
                        <Box>
                            <Button
                                className={classes.button}
                                variant="contained" 
                                color="primary" 
                                onClick={handleFormDialogOpenClick}
                            >
                                본 영화로 등록하기
                            </Button>
                            <ReviewDialog 
                                open={open} 
                                rating={rating} 
                                reviewDescribe={reviewDescribe}
                                onRatingDataChange={onRatingDataChange} 
                                onReviewDataChange={onReviewDataChange} 
                                onFormDialogSubmitClick={handleSubmitButtonClick} 
                                onFormDialogCloseClick={handleCloseButtonClick}
                            />
                        </Box>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default MovieInfo;