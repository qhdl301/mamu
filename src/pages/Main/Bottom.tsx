import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { Navigation, NavigationProps } from '../../components/material-component';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Bottom = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const handleChangeNav:NavigationProps['onChange'] = useCallback((event, newValue)=> {
    setValue(newValue);
  }, []);
    
  return (
    <Navigation classes={classes} value={value} onChange={handleChangeNav}/>
  )
}

export default Bottom;