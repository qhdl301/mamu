import firebase from 'firebase';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main"));

const Routes = () => {
  const history = useHistory();

  useEffect(() => {
    const user = firebase.auth().currentUser;

    if (!user) {
      history.push('/login')
    }
  }, []);

  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" exact render={() => <Main />} />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
