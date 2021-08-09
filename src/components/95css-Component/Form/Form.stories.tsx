import FormItem from './FormItem';
import TextField from '../TextField';
import {useState, useCallback} from 'react';
import RadioGroup,{RadioGroupProps} from '../RadioGroup';
import {action as storybookaction} from '@storybook/addon-actions';

export default {
  title: 'components/Form',  
};

export const Form95 = ()=>{
  const [desc, setDesc] = useState('');
  const [id, setId] = useState('');
  const [pwd, setPwd] = useState('');
  const [radioValue, setRadioValue] = useState();

  const handleChangeDesc = useCallback((e)=> setDesc(e.target.value),[])
  const handleChangeId = useCallback((e)=> setId(e.target.value),[])
  const handleChangePwd = useCallback((e)=> setPwd(e.target.value),[])
  const handleChange:RadioGroupProps['onChange']= useCallback((e) => {
      storybookaction('RadioGroupProps["onChange"]')(e);
      setRadioValue(e.target.value);
  },[]);

  return (
    <>
      <FormItem option='error' label={'아이디'} >
        <TextField option='error' value={id} onChange={handleChangeId}/>
      </FormItem>
      <FormItem option='success' label={'비밀번호'} >
        <TextField value={pwd} onChange={handleChangePwd}/>
      </FormItem>
      <FormItem label={'성별'}>
        <RadioGroup 
              value={radioValue}
              onChange={handleChange}
              classes={{
                item:'mb-2'
              }}
              options={[
                  {
                      label:'남자',
                      value:1
                  },{
                      label:'여자',
                      value:2
                  }
              ]} 
          />
      </FormItem>
      <FormItem label={'자기소개'} >
        <TextField variant={'textarea'} value={desc} onChange={handleChangeDesc}/>
      </FormItem>
    </>
  )
}