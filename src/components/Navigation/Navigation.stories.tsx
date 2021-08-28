import React, { useCallback } from 'react';
import Navigation, { NavigationProps } from './Navigation';
import { makeStyles } from '@material-ui/core';
import { action } from '@storybook/addon-actions';

export default {
  title: 'material-components/Navigation',  // title을 사용하면 카테고리를 나눌 수 있다.
  component: Navigation,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export const BottomNavigation = () => {
  const classes = useStyles();  
  const [value, setValue] = React.useState(0);
  const handleChangeNav:NavigationProps['onChange'] = useCallback((event, newValue)=> {
    action('NavigationProps["onChange"]')(event);
    setValue(newValue);
  }, []);
    
  return ( 
    <Navigation classes={classes} value={value} onChange={handleChangeNav}/>
  )
}

