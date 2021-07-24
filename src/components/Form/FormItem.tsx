import {FC} from 'react';
import clsx from 'clsx';

export type FormItemProps = {
    label:string;
    classes?:{
        root?:string;
        label?:string;
    }
    option?: 'success' | 'error'
}

const FormItem:FC<FormItemProps> = (props)=>{
    const { classes, option, label, children} = props;
    
    return (
        <div className={
            clsx(
                "form-group", {
                    'has-success': option === 'success', 
                    'has-danger': option === 'error'
                },
                "d-flex", 
                "align-items-center",
                "justify-content-between",
                classes?.root
                )
            }
        >
            <label htmlFor={ option } className={clsx('mr-5', classes?.label)}>{label}</label>
            {children}
        </div>
    )
}

export default FormItem