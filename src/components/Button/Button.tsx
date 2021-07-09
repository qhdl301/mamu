import {FC} from 'react';

const Button:FC = (props)=>{
    const {children, ...rest} = props;

    return (
        <button {...rest}>{children}</button>
    )
}

export default Button;