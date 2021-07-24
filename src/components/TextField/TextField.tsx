import clsx from 'clsx';

import type {FC, ChangeEventHandler} from 'react';

export type TextFieldProps = {
    variant?:'default'|'textarea';
    disabled?:boolean;
    option?: 'success'|'error'
    className?:string;
    value:string;
    onChange?:ChangeEventHandler<HTMLInputElement>
}

const TextField:FC<TextFieldProps> = (props)=>{
    const {
        value,
        onChange,
        disabled,
        option,
        variant='default',
        className,
    } = props;

    if(variant==='textarea'){
        return (<textarea id="textarea" className={clsx("form-control"," w-75")} cols={30} rows={10}/>)
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
                "w-75",
                className
                )
            } 
            disabled={disabled} 
        />
    )
}

export default TextField;