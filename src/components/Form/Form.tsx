import {FC} from 'react';
import clsx from 'clsx';

export type FormProps = {
    className?: string;
    labelSize?: string,
    inputSize?: string,
    option: 'default' | 'disabled' | 'success' | 'error' | 'textarea'
}

const Form:FC<FormProps> = (props)=>{
    const { className, option} = props;
    
    return (
        <div className={clsx("form-group", {'has-success': option === 'success', 'has-danger': option === 'error'}, {className}, "d-flex", "align-items-center", "justify-content-between")}>
            <label htmlFor={ option } className={'mr-5'}>{option} ::</label>
            {option !== 'textarea' ?
                <input id={option} type="text" className={clsx("form-control", { 'is-valid': option === 'success', 'is-invalid': option === 'error' }, "w-75")} disabled={option === 'disabled' ? true : false} /> :
                <textarea id="textarea" className={clsx("form-control"," w-75")} cols={30} rows={10}/>}
        </div>
    )
}

export default Form