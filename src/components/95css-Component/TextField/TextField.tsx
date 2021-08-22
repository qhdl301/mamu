import clsx from 'clsx';

import type {FC, ChangeEventHandler} from 'react';

export type TextFieldProps = {
    variant?:'default'|'textarea',
    disabled?:boolean,
    option?: 'success'|'error',
    className?: string,
    inputSize?: string,
    textAreaSize? : string,
    value:string | number,
    onChange?:ChangeEventHandler<HTMLInputElement>,
}

const TextField:FC<TextFieldProps> = (props)=>{
    const {
        value,
        onChange,
        disabled,
        option,
        variant = 'default',
        inputSize = 'w-75',
        textAreaSize = 'w-75',
        className,
    } = props;

    if(variant==='textarea'){
        return (
            <textarea
                id="textarea"
                className={
                    clsx(
                        "form-control",
                        { textAreaSize }
                    )
                }
                cols={30}
                rows={10}
            />)
    }

    return (
        <input 
            onChange={onChange}
            value={value}
            type="text" 
            className={
                clsx("form-control",{ 
                    'is-valid': option === 'success',
                    'is-invalid': option === 'error' 
                }, 
                {inputSize},
                className
                )
            } 
            disabled={disabled} 
        />
    )
}

export default TextField;