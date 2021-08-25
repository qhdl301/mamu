import firebase from 'firebase';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Bottom from './pages/Main/Bottom';

const Login = lazy(() => import("./pages/Login"));
const Header = lazy(() => import("./pages/Main/Header"));
const Body = lazy(() => import("./pages/Main/Body"));

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
        <Route path="/" exact render=
          {
            () => 
              <>
                <Header />
                  <Body/>
                <Bottom />
              </>  
          } />
        <Route path="/login" render={() => <Login />} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
