import { FC } from "react";
import { Button, makeStyles } from '@material-ui/core';

export type ButtonProps = {
    onClick : () => void;
}

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'absolute',
        bottom: theme.spacing(0.5),
    }
}));

const MuiButton : FC<ButtonProps> = (props) => {
    const classes = useStyles();
    const { children, onClick } = props;
    
    return (
        <Button className={classes.root} variant="contained" color="primary" onClick={onClick}>{children}</Button>
    )

}

export default MuiButton;