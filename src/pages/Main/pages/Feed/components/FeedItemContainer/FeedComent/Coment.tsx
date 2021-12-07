import { FC } from "react";
import { Button, TextField, Grid, makeStyles, ButtonProps } from '@material-ui/core';
import ComentListContainer from "./ComentListContainer";

export type ComentProps = {
    onSubmitComplete: ButtonProps['onClick'];
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
    const { onSubmitComplete } = props;

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
                        onClick={onSubmitComplete}
                        variant="outlined"
                        color="primary"
                        type="submit">
                        등록
                    </Button>
                </Grid>
                <ComentListContainer/>
            </Grid>
        </>
    )
}

export default Coment;