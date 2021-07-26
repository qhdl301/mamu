import { useCallback } from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components/Button',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Button,
};

export const Button95 = () => {

  const handleButtonClick = useCallback((e) => {    
    action('clicked')(e.target);
  },[]);
  
  return (
      <Button onClick={handleButtonClick}>Submit</Button>
  )
}

