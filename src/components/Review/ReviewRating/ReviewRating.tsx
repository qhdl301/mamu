import { FC } from 'react'
import { Typography, Box, Grid, makeStyles, createStyles } from '@material-ui/core';
import { Rating, RatingProps } from '@material-ui/lab/';


export type ReviewRatingProps = {
    reviewDate : number;
    ratingValue : RatingProps['value'];
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    rating: {
      marginLeft : theme.spacing(1)
    },
  }),
);

const ReviewRating:FC<ReviewRatingProps> = (props)=>{

    const { reviewDate, ratingValue } = props;
    const  classes  = useStyles();

    return (
            <Box component="fieldset" borderColor="transparent">
                <Grid container direction="row">
                        <Rating 
                            name="review-raiting"
                            value={ratingValue}
                            readOnly
                            /*onChange={(event, newValue) => {
                                setValue(newValue);
                            }}*/
                        />
                        <Typography className={classes.rating}>{ reviewDate + '일 전' }</Typography>                    
                </Grid>
            </Box>
        
    )
}

export default ReviewRating;