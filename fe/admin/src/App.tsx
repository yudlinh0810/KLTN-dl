import { BrowserRouter as Router } from "react-router-dom";
import useClientWidth from "./hooks/useClientWidth.util";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./styles/app.scss";
import "./styles/reset.scss";
import "./styles/root.scss";
import AppWithRouter from "./AppWithRouter";

function App() {
  useClientWidth();

  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
}

export default App;
