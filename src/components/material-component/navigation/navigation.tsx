import { FC } from 'react';

import {
    BottomNavigation,
    BottomNavigationAction
} from '@material-ui/core';

import {
    Home as HomeIcon,
    Favorite as FavoriteIcon,
    ImportContacts as ImportContactsIcon
} from '@material-ui/icons/';

//import clsx from 'clsx';

export type NavigationProps = {
    classes: {
        root? : string
    },
    value : number,
    onChange?: (event: React.ChangeEvent<any>, newValue: number) => void
}

const Navigation:FC<NavigationProps> = (props) => {
    
    const { classes, value, onChange } = props;
                                
    return (
        <BottomNavigation
            className={classes.root}
            value={value}
            showLabels
            onChange={onChange}
        >
            <BottomNavigationAction label="대쉬보드"   icon={<HomeIcon />}/>
            <BottomNavigationAction label="개인성과"   icon={<ImportContactsIcon />}/>
            <BottomNavigationAction label="Wishlist"  icon={<FavoriteIcon />}/>
        </BottomNavigation>
    )
}

export default Navigation;