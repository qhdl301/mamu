import {useMemo} from 'react';
import {v4 as uuidv4} from 'uuid';
import RadioGroupItem from './RadioGroupItem';

import type {FC} from 'react';
import type {RadioGroupItemProps} from './RadioGroupItem';

export type RadioGroupProps = {
    classes?:{
        root?:string;
        item?:string;
    }
    value?:RadioGroupItemProps['value'];
    onChange?:RadioGroupItemProps['onChange']
    options:Array<Pick<RadioGroupItemProps, 'value'|'label'|'disabled'>>;
}

const RadioGroup:FC<RadioGroupProps> =(props)=> {
    const {options, value, onChange, classes} = props;
    const groupName = useMemo(()=>uuidv4(), []);
    
    return (
        <div className={classes?.root}>
            {options.map((option, idx)=>(
                <RadioGroupItem 
                    key={idx}
                    groupName={groupName} 
                    checked={value === option.value.toString()}
                    onChange={onChange}
                    className={classes?.item}
                    {...option}
                />)
            )}
        </div>
    )
}

export default RadioGroup;