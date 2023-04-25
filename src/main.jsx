import ReactDOM from "react-dom/client";
// Components =========>
import App from "./App.jsx";
// React Redux ============>
import { Provider } from "react-redux";
import store from "../redux/Store.js";
// React Router Dom =============>
import { BrowserRouter } from "react-router-dom";
// Css =========>
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
