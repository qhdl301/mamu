import { FC } from "react";
import { Button, ButtonProps as MuiButtonProps } from '@material-ui/core/';

export type ButtonProps = {
    className : MuiButtonProps['className'];
    onClick : () => void;
}

const MuiButton : FC<ButtonProps> = (props) => {

    const { children, className, onClick } = props;
    
    return (
        <Button className={className} variant="contained" color="primary" onClick={onClick}>{children}</Button>
    )

}

export default MuiButton;