import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useFireBaseState } from "./contexts";

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));

const Routes = () => {
  const history = useHistory();
  const fireBaseState = useFireBaseState();

  useEffect(() => {
    if (!fireBaseState.isSignedIn) {
      console.log("!");
      history.push("/login");
    }
    console.log(fireBaseState);
  }, [fireBaseState]);

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/login" render={() => <Login />} />
        <Route path="/Main" render={() => <Main />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
