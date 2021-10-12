import { FC } from "react";
import { Button } from '@mui/material';
import { ButtonProps as MuiButtonProps } from '@mui/material';

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