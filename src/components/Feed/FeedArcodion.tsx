import { FC } from "react";
import { Button, TextField, Avatar, Grid, makeStyles } from '@material-ui/core';

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
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    },
    button: {
        margin : theme.spacing(1)
    }
}));

const FeedArcodion: FC = () => {
    const classes = useStyles();

    return (
            <Grid
                className={ classes.root }
                container
                direction="column"
            >
                <Grid
                    className= { classes.textGrid }
                    container
                >
                    <Avatar>YS</Avatar>
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
                        variant="outlined"
                        color="primary"
                        type="submit">
                        등록
                    </Button>
                </Grid>
            </Grid>
    )
}

export default FeedArcodion;