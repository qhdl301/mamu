import {useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';
import RadioGroupItem from './RadioGroupItem';

import type {FC} from 'react';
import type {RadioGroupItemProps} from './RadioGroupItem';

export type RadioGroupProps = {
    className?:string;
    itemsClassName?:string;
    value?:RadioGroupItemProps['value'];
    onChange?:RadioGroupItemProps['onChange']
    options:Array<Pick<RadioGroupItemProps, 'value'|'label'|'disabled'>>;
}

const RadioGroup:FC<RadioGroupProps> =(props)=> {
    const {options, value, onChange, className, itemsClassName} = props;
    const groupName = useMemo(()=>uuidv4(), []);
    
    return (
        <div className={className}>
            {options.map((option, idx)=>(
                <RadioGroupItem 
                    key={idx}
                    groupName={groupName} 
                    checked={value === option.value.toString()}
                    onChange={onChange}
                    className={itemsClassName}
                    {...option}
                />)
            )}
        </div>
    )
}

export default RadioGroup;