import {FC} from 'react';

type ButtonProps = {

    componentValue : string

}

const Button:FC<ButtonProps> = (props)=>{
    const { children, ...rest } = props;  // children : stories에 컴포는 값
    
    console.log(children);
    console.log(rest);

    return (
        <button {...rest}>{children}</button>
    )
}

export default Button;