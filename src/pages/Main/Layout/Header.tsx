
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Profile } from '../page/components';
import { useFireBaseState } from '../../../contexts';

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
      <Typography variant="h5" className={classes.title}>
        이거 봄?
      </Typography>
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName} />
    </header>  
  );
};

export default Header;
