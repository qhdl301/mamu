import { FC } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";

export type FeedDialogProps = {
  open: boolean;
  movieName: string;
  postFeed: string;
  changeMovieData: (param: FeedDialogProps['movieName']) => void;
  changePostFeedData: (param: FeedDialogProps['postFeed']) => void;
  onFormDialogSubmitClick : () => void;
  onFormDialogCloseClick : () => void;
}

const FeedDialog : FC<FeedDialogProps> = (props) => {

    const { open, movieName, postFeed,
            changeMovieData, changePostFeedData, onFormDialogSubmitClick, onFormDialogCloseClick} = props;
    
    return (
        <Dialog open={open} onClose={onFormDialogCloseClick} aria-labelledby="form-dialog-title" fullWidth> 
            <DialogTitle>당신에 피드를 남겨주세요</DialogTitle>
            <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  id="movie_Dailog_textArea"
                  label="어떤 영화를 보셨나요."
                  type="search"
                  multiline
                  fullWidth
                  value={movieName}
                  onChange={(e) => (changeMovieData&&changeMovieData(e.target.value))}
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
                  onChange={(e) => (changePostFeedData&&changePostFeedData(e.target.value))}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onFormDialogSubmitClick} color="primary" type="submit">완료</Button>
                <Button onClick={onFormDialogCloseClick} color="primary">취소</Button>
            </DialogActions>
        </Dialog>
    )
}

export default FeedDialog;