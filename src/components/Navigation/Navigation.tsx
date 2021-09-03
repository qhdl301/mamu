import { FC } from 'react';

import {
    makeStyles,
    AppBar,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';

import {
    Home as HomeIcon,
    Favorite as FavoriteIcon,
    ImportContacts as ImportContactsIcon
} from '@material-ui/icons/'; 

export type NavigationProps = {
    classes? : { 
        bottomNavigation : string,
    },
    value : number,
    onChange?: (event: React.ChangeEvent<unknown>, newValue: number) => void
}

const useStyles = makeStyles(() => ({
  root: {
    position: "fixed",
    top: "auto",
    bottom : 0,
  },
}));

const Navigation:FC<NavigationProps> = (props) => {
    
    const { classes:overrideClasses, value, onChange } = props;

    const classes = useStyles();                            

    return (
        <AppBar className={classes.root}>
            <BottomNavigation
                className={overrideClasses?.bottomNavigation}
                value={value}
                showLabels
                onChange={onChange}
            >
                <BottomNavigationAction label="대쉬보드"   icon={<HomeIcon />}/>
                <BottomNavigationAction label="개인성과"   icon={<ImportContactsIcon />}/>
                <BottomNavigationAction label="Wishlist"  icon={<FavoriteIcon />}/>
            </BottomNavigation>
        </AppBar>    
    )
}

export default Navigation;