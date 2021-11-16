import { FC, useState,useCallback } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';

export type FormDialogItem = {
  rating : number;
  reviewDescribe : string;
}

export type FormDialogProps = {
  type : string;
  open : boolean;
  onFormDialogSubmitClick : (reviewData:FormDialogItem) => void;
  onFormDialogCloseClick : () => void;
}
  const labels: { [index: string]: string } = {
    0.5: 'Useless',
    1: 'Useless+',
    1.5: 'Poor',
    2: 'Poor+',
    2.5: 'Ok',
    3: 'Ok+',
    3.5: 'Good',
    4: 'Good+',
    4.5: 'Excellent',
    5: 'Excellent+',
  };
const useStyles = makeStyles({
  rating : {
    width: 200,
    display: 'flex',
    alignItems: 'center',
  },
});

const FormDialog : FC<FormDialogProps> = (props) => {
  const { type, open, onFormDialogCloseClick, onFormDialogSubmitClick } = props;
  let typeName = '';
  const [rating, setRating] = useState<FormDialogItem['rating']>(0);
  const [reviewDescribe, setReviewDescribe] = useState<FormDialogItem['reviewDescribe']>("");
  const [hover, setHover] = useState(-1);
  const classes = useStyles();

  if (type.indexOf('movieInfo') > -1) {
    typeName = '리뷰';
  } else {
    typeName = '피드';
  }

  const handleSubmitClick = useCallback(() => {
    onFormDialogSubmitClick(
      {
        rating,
        reviewDescribe
      }
    );
  },[
    rating,
    reviewDescribe
  ])

  return (
    <div>
      <Dialog open={open} onClose={onFormDialogCloseClick} aria-labelledby="form-dialog-title" fullWidth> 
        <DialogTitle>당신에 {typeName}를 남겨주세요</DialogTitle>
        <DialogContent>
          <Box className={classes.rating}>
            <Rating  
              value={rating}
              size='large'
              onChange={(event, newValue) => {setRating(newValue ?? 0)}}
              onChangeActive={(event, newHover) => {setHover(newHover)}}
            />
            {rating !== null && <Box ml={2}>{labels[hover !== -1 ? hover : rating]}</Box>}
          </Box>
          <TextField
            autoFocus
            margin="dense"
            id="review_Dailog_textArea"
            label="당신에 생각을 적어주세요."
            type="search"
            multiline
            fullWidth
            value = {reviewDescribe}
            onChange={(e) => setReviewDescribe(e.target.value)} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubmitClick} color="primary" type="submit">
            완료
          </Button>
          <Button onClick={onFormDialogCloseClick} color="primary">
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;