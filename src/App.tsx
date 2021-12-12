import { createTheme , ThemeProvider } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { FireBaseProvider } from './contexts';
import Routes from './Routes';
import './css/main.css'


const theme = createTheme ({
  typography: {
    fontFamily: `"Noto Sans KR", "Roboto", "Helvetica", "Arial", sans-serif`,
  },
  palette: {
    type: 'light',
    primary: {
      main: 'rgba(39,39,39,0.89)',
    },
    secondary: {
      main: '#ac86f5',
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
      <FireBaseProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
      </FireBaseProvider>
    </ThemeProvider>
  );
};

export default App;
