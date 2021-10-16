import { FC } from "react";
import { Accordion, AccordionSummary, Card, CardContent, CardMedia, CircularProgress, makeStyles, Typography } from "@material-ui/core";
import { MuiButton } from "../../../../../../components/Button";
import { CardMediaProps, TypographyProps } from "@material-ui/core/";
import {ArrowDropDown as ArrowDropDownIcon} from '@material-ui/icons';

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
        width: '100%',
        borderRadius : 3,
        variant : 'outlined',
        size : 'large'
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
    const classes = useStyles();

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
                            <CircularProgress/>
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
                <MuiButton className={classes.button}>본 영화로 등록하기</MuiButton>
            </CardContent>
        </Card>

    )

}

export default MovieInfo;