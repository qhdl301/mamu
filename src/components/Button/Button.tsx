import { FC } from "react";
import { Button, ButtonProps as MuiButtonProps } from '@material-ui/core/';

export type ButtonProps = {
    className : MuiButtonProps['className']
}

const MuiButton : FC<ButtonProps> = (props) => {

    const { children, className } = props;
    
    return (
        <Button className={className}>{children}</Button>
    )

}

export default MuiButton;