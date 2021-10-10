import { FC } from "react";
import { Button } from '@mui/material';

export type ButtonProps = {
    option : string
}

const MuiButton : FC<ButtonProps> = (props) => {

    const { children, option } = props;
    
    return (
        <Button className={option}>{children}</Button>
    )

}

export default MuiButton;