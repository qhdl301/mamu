import "bootstrap/dist/css/bootstrap.min.css";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import { FireBaseProvider } from "./contexts";

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
