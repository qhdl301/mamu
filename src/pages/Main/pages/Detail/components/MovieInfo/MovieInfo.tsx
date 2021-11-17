import { FC, useState } from "react";
import { Accordion, AccordionSummary, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import {ArrowDropDown as ArrowDropDownIcon} from '@material-ui/icons';
import { CustmomCircleProgress } from "../../../../../../components/Progress/Circle";
import { MuiButton } from "../../../../../../components";
import { FormDialog, FormDialogProps } from "../../../../../../components/Dialog";
import { MovieDetail } from "../../../../../../stores";
import { useFireBaseState } from "../../../../../../contexts";

const useStyles = makeStyles((theme) => ({
    root: {
        display : 'flex',
        width: '100%',
        height: '60%',
    },
    img: {
        position: 'relative',
        width: '30%',
    },
    info: {
        position: 'relative',
        width: '70%',
    },
    button:{
        position: 'absolute',
        bottom: theme.spacing(1),
        width : '95%'
    }
}));

export type MovieInfoProps = {
    targetMovie : MovieDetail;
    isDetailInfoLoading:boolean;
}

export type FormDialogReviewItem = {
    rating : number;
    reviewDescribe : string;
}

const MovieInfo : FC<MovieInfoProps> = (props) => {
    const {isDetailInfoLoading, targetMovie} = props;
    const [open, setOpen] = useState(false);
    const [rating, setRating] = useState<FormDialogReviewItem['rating']>(0);
    const [reviewDescribe, setReviewDescribe] = useState<FormDialogReviewItem['reviewDescribe']>("");
    const firebaseState = useFireBaseState();
    const classes = useStyles();
    const date = new Date();

    const handleFormDialogOpenClick = () => {
        setOpen(true);
    };

    const changeRatingData = (ratingData : FormDialogReviewItem['rating']) => {
        setRating(ratingData);
    };
    
    const changeReviewDescribeData = (reviewData : FormDialogReviewItem['reviewDescribe']) => {
        setReviewDescribe(reviewData);
    };

    const handleSubmitButtonClick : FormDialogProps['onFormDialogSubmitClick'] = () => {
        targetMovie.insertReviewInfo({
            userName:'***',            
            review:reviewDescribe,
            reviewRating:rating,
            uid:firebaseState.user.uid,
            timeStamp: `${date.getFullYear()}-${date.getMonth()+1}-${date.getDay()}`,
        });
        setOpen(false);
    }
    
    const handleCloseButtonClick = () => {
        setOpen(false);
    };


    return (

        <Card className={classes.root}>
            <CardMedia
                className = {classes.img}
                component = "img"
                alt = "movie image"
                image = {targetMovie.basicInfo.imgUrl}
            />
            <CardContent
                className = {classes.info}
            >
                <Typography noWrap gutterBottom variant="h5" component="div">
                    {targetMovie.basicInfo.title}
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        id="panel1a-header"
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
                <div>
                    <MuiButton className={classes.button} onClick={handleFormDialogOpenClick}>본 영화로 등록하기</MuiButton>
                    <FormDialog type={'movieInfo'} open={open} rating={rating} reviewDescribe={reviewDescribe} changeRatingData={changeRatingData} changeReviewDescribeData={changeReviewDescribeData} onFormDialogSubmitClick={handleSubmitButtonClick} onFormDialogCloseClick={handleCloseButtonClick}></FormDialog>
                </div>
            </CardContent>
        </Card>

    )

}

export default MovieInfo;