import { FC } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, TextFieldProps } from "@material-ui/core";
import { ButtonProps } from "components/Button/Button";

export type FeedDialogProps = {
  open: boolean;
  movieName: string;
  feedData: string;
  onChangeMovieName : TextFieldProps['onChange'];
  onChangeFeedContent : TextFieldProps['onChange'];
  onClickSubmitButton : ButtonProps['onClick'];
  onClickCloseButton : ButtonProps['onClick'];
}

const FeedDialog : FC<FeedDialogProps> = (props) => {
    const {
      open,
      movieName,
      feedData,
      onChangeMovieName,
      onChangeFeedContent,
      onClickSubmitButton,
      onClickCloseButton 
    } = props;
    
    return (
        <Dialog 
          open={open}
          onClose={onClickCloseButton}
          maxWidth="xl"
        > 
          <DialogTitle disableTypography>당신에 피드를 남겨주세요</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="어떤 영화를 보셨나요."
              type="search"
              multiline
              fullWidth
              variant="outlined"
              minRows="2"
              value={movieName}
              onChange={onChangeMovieName}
            />
            <TextField
              margin="dense"
              label="당신에 생각을 적어주세요."
              type="search"
              multiline
              fullWidth
              variant="outlined"
              minRows="6"
              value={feedData}
              onChange={onChangeFeedContent}
              />
            </DialogContent>
            <DialogActions>
                <Button 
                  onClick={onClickSubmitButton} 
                  color="primary" 
                  type="submit">
                    완료
                </Button>
                <Button 
                  onClick={onClickCloseButton} 
                  color="primary">
                    취소
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default FeedDialog;