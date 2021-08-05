import React, { FC } from 'react';

import { makeStyles, BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

//import clsx from 'clsx';

type NavigationProps = {

}

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

const Navigation:FC<NavigationProps> = ()=>{
                                
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.root}
        >
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            
        </BottomNavigation>
    )
}

export default Navigation;