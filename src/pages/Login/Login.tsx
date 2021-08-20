import { useEffect } from "react";
import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { useFireBase, useFireBaseState } from "../../contexts";
import LoginView from "./LoginView";

const Login = () => {
  const history = useHistory();
  const { googleLogin } = useFireBase();
  const { isSignedIn } = useFireBaseState();
  const handleGoogleLoginClick = useCallback(() => googleLogin(), [
    googleLogin,
  ]);

  useEffect(() => {
    if (isSignedIn) {
      history.push("./main");
    }
  }, [isSignedIn]);

  return <LoginView onGoogleLoginClick={handleGoogleLoginClick} />;
};

export default Login;
