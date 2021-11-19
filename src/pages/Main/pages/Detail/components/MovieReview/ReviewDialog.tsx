import { FC, useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, makeStyles } from "@material-ui/core";
import { Rating } from '@material-ui/lab';

export type ReviewDialogProps = {
  open: boolean;
  rating: number;
  reviewDescribe: string;
  onRatingDataChange: (param : ReviewDialogProps['rating']) => void;
  onReviewDataChange: (param : ReviewDialogProps['reviewDescribe']) => void;
  onFormDialogSubmitClick: () => void;
  onFormDialogCloseClick: () => void;
}

const labels: { [index: string]: string } = {
    1: 'Hated it',
    2: 'Disliked it',
    3: 'It was Ok',
    4: 'Liked it',
    5: 'Loved it',
};
  
const useStyles = makeStyles({
  rating : {
    width: 300,
    display: 'flex',
    alignItems: 'center',
  },
});

const ReviewDialog: FC<ReviewDialogProps> = (props) => {
    const classes = useStyles();
    const [hover, setHover] = useState(-1);
    const {
      open,
      rating,
      reviewDescribe,
      onRatingDataChange,
      onReviewDataChange,
      onFormDialogSubmitClick,
      onFormDialogCloseClick } = props;
    
    return (
        <Dialog open={open} onClose={onFormDialogCloseClick} aria-labelledby="form-dialog-title" fullWidth> 
            <DialogTitle>당신에 리뷰를 남겨주세요</DialogTitle>
            <DialogContent>
                <Box className={classes.rating}>
                  <Rating 
                    value={rating}
                    size='large'
                    onChange={(event, newValue) => {onRatingDataChange&&onRatingDataChange(newValue ?? 0)}}
                    onChangeActive={(event, newHover) => {setHover(newHover)}}
                  />
                  {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
                </Box>
                <TextField
                    autoFocus
                    margin="dense"
                    id="review_Dailog_textArea"
                    label="당신에 리뷰를 적어주세요."
                    type="search"
                    multiline
                    fullWidth
                    value = {reviewDescribe}
                    onChange={(e) => (onReviewDataChange&&onReviewDataChange(e.target.value))}
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