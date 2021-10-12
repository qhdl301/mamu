import { FC } from "react";
import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, CardMedia, makeStyles, Typography } from "@material-ui/core";
import { ArrowDropDown as ArrowDropDownIcon } from '@mui/icons-material';
import { MuiButton } from "../../../../../../components/Button";

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

const MovieInfo : FC = () => {
    
    const classes = useStyles();

    return (

        <Card className={classes.root}>
            <CardMedia
                className = {classes.img}
                component = "img"
                alt = "movie image"
                image = {"https://image.news1.kr/system/photos/2021/7/1/4849903/article.jpg/dims/optimize"}
            />
            <CardContent
                className = {classes.info}
            >
                <Typography noWrap gutterBottom variant="h5" component="div">
                    스파이더 맨 노 웨이 홈
                </Typography>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ArrowDropDownIcon />}
                        id="panel1a-header"
                    >   
                        <Typography variant="body2"> 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </Typography>
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