
import { AppBar, Typography } from '@material-ui/core';
import { useFireBaseState } from '../../contexts';
import { Profile } from './components';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
  },
}));

const Header = () => {
  const loginState = useFireBaseState();
  const classes = useStyles();

  return (
    <AppBar position="static" color="inherit">
      <Typography variant="h5" color="inherit" className={classes.title}>
        MAMU
      </Typography>
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName} />
    </AppBar>  
  );
};

export default Header;
