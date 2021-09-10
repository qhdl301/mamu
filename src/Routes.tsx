import firebase from 'firebase';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main/Main"));

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
        <Route path= "/login" render={() => <Login />}/>
        <Route path= "/" render={() => <Main/>}/>
      </Switch>
    </Suspense>
  );
};

export default Routes;
