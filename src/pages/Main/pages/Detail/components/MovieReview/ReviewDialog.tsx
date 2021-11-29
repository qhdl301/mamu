import { FC } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, makeStyles, TextFieldProps } from "@material-ui/core";
import { Rating, RatingProps } from '@material-ui/lab';

export type ReviewDialogProps = {
  open: boolean;
  rating: number;
  reviewDescribe: string;
  onRatingDataChange: RatingProps['onChange'];
  onReviewDataChange: TextFieldProps['onChange'];
  onFormDialogSubmitClick: () => void;
  onFormDialogCloseClick: () => void;
}
  
const useStyles = makeStyles({
  rating : {
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
});

const ReviewDialog: FC<ReviewDialogProps> = (props) => {
    const classes = useStyles();
    const {
      open,
      rating,
      reviewDescribe,
      onRatingDataChange,
      onReviewDataChange,
      onFormDialogSubmitClick,
      onFormDialogCloseClick 
    } = props;
    
    return (
        <Dialog open={open} onClose={onFormDialogCloseClick} aria-labelledby="form-dialog-title" fullWidth> 
            <DialogTitle>당신에 리뷰를 남겨주세요</DialogTitle>
            <DialogContent>
                <Box className={classes.rating}>
                  <Rating
                    name="simple-controlled"
                    value={rating}
                    size='large'
                    onChange={onRatingDataChange}
                  />
                </Box>
                <TextField
                    margin="dense"
                    label="당신에 리뷰를 적어주세요."
                    type="search"
                    multiline
                    fullWidth
                    value = {reviewDescribe}
                    onChange={onReviewDataChange}
                />
             </DialogContent>
            <DialogActions>
                <Button onClick={onFormDialogSubmitClick} color="primary" type="submit">완료</Button>
                <Button onClick={onFormDialogCloseClick} color="primary">취소</Button>
            </DialogActions>
        </Dialog>
    )
}

export default ReviewDialog;