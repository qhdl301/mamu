import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { FireBaseProvider, RootStoreProvider } from './contexts';
import Routes from './Routes';

const App = () => {
  return (
    <RootStoreProvider>
      <FireBaseProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </FireBaseProvider>
    </RootStoreProvider>
  );
};

export default App;
