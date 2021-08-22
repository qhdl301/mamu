import clsx from 'clsx';

import type {FC, ChangeEventHandler} from 'react';

export type RadioGroupItemProps = {
    groupName:string;
    label:string;
    value:string|number;
    checked:boolean;
    disabled?:boolean;
    className?:string;
    onChange?:ChangeEventHandler<HTMLInputElement>
}

const RadioGroupItem:FC<RadioGroupItemProps> = (props)=>{
    const {groupName, label, value, disabled, checked, onChange, className} = props;
    
    return (
        <div className={clsx("form-check form-check-radio", className, {disabled})}>
            <label className="form-check-label">
                <input 
                    className="form-check-input" 
                    type="radio"
                    name={groupName}
                    value={value}
                    disabled={disabled}
                    checked={checked}
                    onChange={onChange}
                />
                <span className="form-check-sign"></span>
                {label}
            </label>
        </div>
    )
}

export default RadioGroupItem