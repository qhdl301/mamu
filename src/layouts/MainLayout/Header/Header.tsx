
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Profile from './Profile';
import { useFireBaseState } from '../../../contexts';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    padding: theme.spacing(0.5),
    margin: theme.spacing(0.5),
  },
}));

const Header = () => {
  const loginState = useFireBaseState();
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4" className={classes.title}>
        이거 봄?
      </Typography>
      <Profile userImg={loginState.user.photoURL} userName={loginState.user.displayName} />
    </Box>  
  );
};

export default Header;
