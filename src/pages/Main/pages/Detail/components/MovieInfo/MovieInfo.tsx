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

const MovieInfo : FC<MovieInfoProps> = (props) => {
    const {isDetailInfoLoading, targetMovie} = props;
    const [open, setOpen] = useState(false);
    const firebaseState = useFireBaseState();
    const classes = useStyles();

    const handleFormDialogOpenClick = () => {
        setOpen(true);
    };

    const handleSubmitButtonClick : FormDialogProps['onFormDialogSubmitClick'] = (submitObj) => {
        targetMovie.insertReviewInfo({
            userName:'***',            
            review:submitObj.reviewDescribe,
            reviewRating:submitObj.rating,
            uid:firebaseState.user.uid,
            timeStamp:new Date().getTime(),
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
                    <FormDialog open={open} onFormDialogSubmitClick={handleSubmitButtonClick} onFormDialogCloseClick={handleCloseButtonClick}></FormDialog>
                </div>
            </CardContent>
        </Card>

    )

}

export default MovieInfo;