import { FC } from "react";
import { Button, TextField, Grid, makeStyles, ButtonProps, TextFieldProps } from '@material-ui/core';
import ComentList, { ComentListContainerProps } from "./ComentListContainer";

export type ComentProps = {
    feedComent : ComentListContainerProps['feedComentList'];
    onComentChange : TextFieldProps['onChange'];
    onSuccessClick : ButtonProps['onClick'];
}

const useStyles = makeStyles((theme) => ({
    root: {
        width : 'auto',
        margin : theme.spacing(2)
    },
    textGrid: {
        display: 'flex',
        flexDirection : 'row',
        flexWrap: 'nowrap',
    },
    textField: {
        margin: theme.spacing(0,1),
    },
    button: {
        margin : theme.spacing(1)
    }
}));

const Coment: FC<ComentProps> = (props) => {
    const classes = useStyles();
    const { 
        feedComent,
        onComentChange,
        onSuccessClick
    } = props;

    return (
        <>
            <Grid
                className={ classes.root }
                container
                direction="column"
            >
                <Grid
                    className= { classes.textGrid }
                    container
                >
                    <TextField
                        className={classes.textField}
                        autoFocus
                        label="답글을 남겨주세요"
                        type="search"
                        multiline
                        fullWidth
                        variant="outlined"
                        onChange={onComentChange}
                        minRows="2"
                    /> 
                </Grid>
                <Grid
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                >
                    <Button
                        className={classes.button}
                        variant="outlined"
                        color="primary"
                        type="submit"
                        onClick={onSuccessClick}
                    >
                        등록
                    </Button>
                </Grid>
                <ComentList 
                    feedComentList={feedComent}
                />
            </Grid>
        </>
    )
}

export default Coment;