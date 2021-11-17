import { FC, useState } from 'react';
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, Box, makeStyles } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { FormDialogReviewItem } from '../../pages/Main/pages/Detail/components/MovieInfo';
import { FormDialogFeedItem } from '../../pages/Main/pages/Feed';

export type FormDialogProps = {
  type : string;
  open: boolean;
  rating?: number;
  reviewDescribe?: string;
  movieName?: string;
  postFeed?: string;
  changeRatingData?: (ratingData : FormDialogReviewItem['rating']) => void;
  changeReviewDescribeData?: (reviewData : FormDialogReviewItem['reviewDescribe']) => void;
  changeMovieData?: (movieData: FormDialogFeedItem['movieName']) => void;
  changePostFeedData?: (feedData : FormDialogFeedItem['postFeed']) => void;
  onFormDialogSubmitClick : () => void;
  onFormDialogCloseClick : () => void;
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

const FormDialog: FC<FormDialogProps> = (props) => {

  const { type, open, rating = 0, reviewDescribe = '', movieName = '', postFeed ='',
          onFormDialogCloseClick, onFormDialogSubmitClick, changeRatingData, changeReviewDescribeData, changePostFeedData, changeMovieData } = props;
  const [hover, setHover] = useState(-1);
  const classes = useStyles();
  let typeName = '';

  if (type.indexOf('movieInfo') > -1) {
    typeName = '리뷰';
  } else {
    typeName = '피드';
  }

 return (
    <div>
      <Dialog open={open} onClose={onFormDialogCloseClick} aria-labelledby="form-dialog-title" fullWidth> 
        <DialogTitle>당신에 {typeName}를 남겨주세요</DialogTitle>
        <DialogContent>
          {
            typeName === '리뷰' ?
              <>
                <Box className={classes.rating}>
                  <Rating 
                    value={rating}
                    size='large'
                    onChange={(event, newValue) => {changeRatingData && changeRatingData(newValue ?? 0)}}
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
                  onChange={(e) => (changeReviewDescribeData && changeReviewDescribeData(e.target.value))} 
                />
              </>
              :
              <>
                <TextField
                  autoFocus
                  margin="dense"
                  id="movie_Dailog_textArea"
                  label="어떤 영화를 보셨나요."
                  type="search"
                  multiline
                  fullWidth
                  value={movieName}
                  onChange={(e) => (changeMovieData && changeMovieData(e.target.value))}
                />
                <TextField
                  autoFocus
                  margin="dense"
                  id="feed_Dailog_textArea"
                  label="당신에 생각을 적어주세요."
                  type="search"
                  multiline
                  fullWidth
                  value={postFeed}
                  onChange={(e) => (changePostFeedData && changePostFeedData(e.target.value))}
                />
              </>
          }
        </DialogContent>
        <DialogActions>
          <Button onClick={onFormDialogSubmitClick} color="primary" type="submit">완료</Button>
          <Button onClick={onFormDialogCloseClick} color="primary">취소</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FormDialog;