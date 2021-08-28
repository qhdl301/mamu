
import { AppBar, Typography } from '@material-ui/core';
import { Profile } from '..';
import { makeStyles } from '@material-ui/core/styles';
import { useFireBaseState } from '../../../../contexts';

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
    <header>
      <AppBar position="static" color="inherit">
        <Typography variant="h5" color="inherit" className={classes.title}>
          이거 봄?
        </Typography>
      </AppBar>
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName} />
    </header>  
  );
};

export default Header;
