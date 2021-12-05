import { useFireBaseState, useRootStore } from "contexts";
import { FC, useCallback, useState } from "react";
import AddDialog, { AddDialogProps } from "./AddDialog";

export type AddDialogContainerProps = {
    open : AddDialogProps['open'];
    onCancel : () => void;
    onSubmitComplete : () => void;
};

const AddDialogContainer : FC<AddDialogContainerProps> = (props) => {
    const { open, onCancel, onSubmitComplete } = props;
    const { feedList } = useRootStore();
    const firebaseState = useFireBaseState();
    const userUid = firebaseState.user.uid;
    const [movieName, setMovieName] = useState<AddDialogProps['movieName']>("");
    const [feedContent, setFeedContent] = useState<AddDialogProps['feedData']>("");
    const handleMovieNameChange : AddDialogProps['onChangeMovieName'] = useCallback((e) => setMovieName(e.target.value), []);
    const handleFeedContentChange : AddDialogProps['onChangeFeedContent'] = useCallback((e) => setFeedContent(e.target.value) , []);
    const handleSubmitButtonClick = useCallback(() => {
        const date = new Date();

        feedList.insertFeedInfo({
          userName: '***',
          uid: userUid,
          feedId: `${userUid}-${date.getTime()}`,
          timeStamp: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
          movieName: movieName,
          postfeed: feedContent,
        }).then(() => onSubmitComplete());

      }, [movieName, feedContent, onSubmitComplete]);

    const handleCloseButtonClick = useCallback(() => {  
        setMovieName(''); 
        setFeedContent(''); 
        onCancel();
    }, []);

    return (
        <AddDialog 
          open={open} 
          movieName={movieName} 
          feedData={feedContent} 
          onChangeMovieName={handleMovieNameChange} 
          onChangeFeedContent={handleFeedContentChange} 
          onClickSubmitButton={handleSubmitButtonClick} 
          onClickCloseButton={handleCloseButtonClick}
        />
    )

}

export default AddDialogContainer;