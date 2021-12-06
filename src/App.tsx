import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { FireBaseProvider } from './contexts';
import Routes from './Routes';

const App = () => {
  return (
    <FireBaseProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
    </FireBaseProvider>
  );
};

export default App;
