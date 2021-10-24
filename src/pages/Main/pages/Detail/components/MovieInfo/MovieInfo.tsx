import { FC, useState } from "react";
import { Accordion, AccordionSummary, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { CardMediaProps, TypographyProps } from "@material-ui/core/";
import {ArrowDropDown as ArrowDropDownIcon} from '@material-ui/icons';
import { CustmomCircleProgress } from "../../../../../../components/Progress/Circle";
import { MuiButton } from "../../../../../../components";
import { FormDialog, FormDialogProps } from "../../../../../../components/Dialog";

const useStyles = makeStyles({
    root: {
        display : 'flex',
        width: '100%',
        height: '60%',
    },
    img: {
        width: '30%',
    },
    info: {
        width: '70%',
    },
    button:{
        width: '30%',
        border : 1,
        borderRadius : 3,
        borderColor : 'primary.main',
        variant : 'outlined',
        size : 'large',
    }
});

export type MovieInfoProps = {
    title: TypographyProps['children']
    imgSrc:CardMediaProps['image']
    description:TypographyProps['children']
    isDetailInfoLoading:boolean;
}

const MovieInfo : FC<MovieInfoProps> = (props) => {
    const {title, imgSrc, description, isDetailInfoLoading} = props;
    const [open, setOpen] = useState(false);
    
    const classes = useStyles();

    const handleFormDialogOpenClick = () => {
        setOpen(true);
    };

    const handleSubmitButtonClick : FormDialogProps['onFormDialogSubmitClick'] = (submitObj) => {

        alert(submitObj.rating);
        alert(submitObj.reviewDescribe);
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
                image = {imgSrc}
            />
            <CardContent
                className = {classes.info}
            >
                <Typography noWrap gutterBottom variant="h5" component="div">
                    {title}
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
                                {description}
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