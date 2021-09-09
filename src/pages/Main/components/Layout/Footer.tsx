import React, { useCallback } from 'react';
import { makeStyles } from '@material-ui/core';
import { Navigation, NavigationProps } from '../../../../components';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const Bottom = () => {
  const classes = useStyles();
  const [navigationIndex, setNavigationIndex] = React.useState(0);
  const handleChangeNav:NavigationProps['onChange'] = useCallback((event, newValue)=> {
    setNavigationIndex(newValue);
  }, []);
    
  return (
      <Navigation classes={classes} value={navigationIndex} onChange={handleChangeNav}/>
  )
}

export default Bottom;