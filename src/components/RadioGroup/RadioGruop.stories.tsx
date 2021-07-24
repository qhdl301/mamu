import {useCallback} from 'react';
import {useState} from 'react';
import RadioGroup from './RadioGroup';
import {action} from '@storybook/addon-actions';

import type {RadioGroupProps} from './RadioGroup'

export default {
  title: 'components/RadioGroup',  // title을 사용하면 카테고리를 나눌 수 있다.
};

export const Default = ()=>{
    const [radioValue, setRadioValue] = useState();
    const handleChange:RadioGroupProps['onChange']= useCallback((e) => {
        action('RadioGroupProps["onChange"]')(e);
        setRadioValue(e.target.value);
    },[]);

    return (
        <RadioGroup 
            value={radioValue}
            onChange={handleChange}
            classes={{
                item:'mb-2'
            }}
            options={[
                {
                    label:'Here is 1',
                    value:1
                },{
                    label:'Here is 2',
                    value:2
                },{
                    label:'Here is 3 (becomes 2, will be disabled)',
                    value:3,
                    disabled:radioValue==='2'
                },{
                    label:'Here is 4(becomes 2, will be disabled)',
                    value:4,
                    disabled:radioValue==='2'
                }
            ]} 
        />
    )
}

Default.storyName = 'RadioGroup';
