import '../../css/login.css';
import { FC, useEffect, useState } from 'react';
import {
 Button,
 ButtonProps,
 CircularProgress,
 Container,
 Grid,
 Grow,
 makeStyles,
 Typography
} from '@material-ui/core';

export type LoginViewProps = {
  onGoogleLoginClick: ButtonProps["onClick"];
};

const useStyles = makeStyles(() => ({
  root: {
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

const LoginView: FC<LoginViewProps> = (props) => {
  const { onGoogleLoginClick } = props;
  const classes = useStyles();
  const [shouldShowLogin, setShouldShowLogin] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldShowLogin(true);
    }, 2000)
    
    return ()=> clearTimeout(timeout);
  },[])

  return (
    <Container className={classes.root}>
      {shouldShowLogin ? (
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={4}
        >
          <Grid item>
            <Grow in={true} timeout={1000}>
              <Typography variant="h2">MAMU</Typography>
            </Grow>
            <Grow in={true} timeout={2000}>
              <Typography variant="body1">당신의 취미를 쌓아보세요.</Typography>
            </Grow>
          </Grid>
          <Grid item>
            <Grow in={true} timeout={2000}>
              <Button className="login_btn" onClick={onGoogleLoginClick}></Button>
            </Grow>
          </Grid>
        </Grid>
      ) : <Grid container justifyContent='center'><CircularProgress /></Grid>}
    </Container>
  );
};

export default LoginView;
