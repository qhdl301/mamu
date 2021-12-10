import { FC } from 'react';
import { Link } from 'react-router-dom';

import {
    makeStyles,
    AppBar,
    Slide,
    BottomNavigation,
    BottomNavigationAction,
} from '@material-ui/core';

import {
    Home as HomeIcon,
    Favorite as FavoriteIcon,
    ImportContacts as ImportContactsIcon
} from '@material-ui/icons/'; 
import useScrollDetect from './useScrollDetect';

export type NavigationProps = {
    classes? : { 
        bottomNavigation : string,
    },
    value : number,
    onChange?: (event: React.ChangeEvent<unknown>, newValue: number) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: "auto",
    bottom : theme.spacing(0)
  },
}));

const Navigation:FC<NavigationProps> = (props) => {
    const { classes:overrideClasses, value, onChange } = props;
    const classes = useStyles();

    const {isUpBefore} = useScrollDetect();

    return (
        <Slide direction="up" in={isUpBefore} >
            <AppBar className={classes.root}>
                <BottomNavigation
                    className={overrideClasses?.bottomNavigation}
                    value={value}
                    showLabels
                    onChange={onChange}
                >
                    <BottomNavigationAction label="대쉬보드" icon={<HomeIcon />} component={Link} to={'/'}/>
                    <BottomNavigationAction label="개인성과" icon={<ImportContactsIcon/>} component={Link} to={'/mission'}/>
                    <BottomNavigationAction label="Feed" icon={<FavoriteIcon />} component={Link} to={'/Feed'}/>
                </BottomNavigation>
            </AppBar>    
        </Slide>
    )
}

export default Navigation;