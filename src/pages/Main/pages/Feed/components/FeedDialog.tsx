import { FC } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, TextFieldProps } from "@material-ui/core";
import { ButtonProps } from "components/Button/Button";

export type FeedDialogProps = {
  open: boolean;
  movieName: string;
  feedData: string;
  handleMovieNameChange : TextFieldProps['onChange'];
  handleFeedContentChange : TextFieldProps['onChange'];
  handleFormDialogSubmitClick : ButtonProps['onClick'];
  handleFormDialogCloseClick : ButtonProps['onClick'];
}

const FeedDialog : FC<FeedDialogProps> = (props) => {
    const {
      open,
      movieName,
      feedData,
      handleMovieNameChange,
      handleFeedContentChange,
      handleFormDialogSubmitClick,
      handleFormDialogCloseClick 
    } = props;
    
    return (
        <Dialog 
          open={open} 
          onClose={handleFormDialogCloseClick} 
          fullWidth
        > 
          <DialogTitle>당신에 피드를 남겨주세요</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="어떤 영화를 보셨나요."
              type="search"
              multiline
              fullWidth
              value={movieName}
              onChange={handleMovieNameChange}
            />
            <TextField
              margin="dense"
              label="당신에 생각을 적어주세요."
              type="search"
              multiline
              fullWidth
              value={feedData}
              onChange={handleFeedContentChange}
              />
            </DialogContent>
            <DialogActions>
                <Button 
                  onClick={handleFormDialogSubmitClick} 
                  color="primary" 
                  type="submit">
                    완료
                </Button>
                <Button 
                  onClick={handleFormDialogCloseClick} 
                  color="primary">
                    취소
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FeedDialog;