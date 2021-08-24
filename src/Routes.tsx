import firebase from 'firebase';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Header from './pages/Main/Header';
import Bottom from './pages/Main/Bottom';

const Login = lazy(() => import("./pages/Login"));
const Main = lazy(() => import("./pages/Main/Header"));

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
      <Header />
        <div>
          <Switch>
            <Route path="/" exact render={() => <Main />} />
            <Route path="/login" render={() => <Login />} />
          </Switch>
        </div>
      <Bottom/>  
    </Suspense>
  );
};

export default Routes;
