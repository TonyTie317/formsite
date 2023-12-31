import "./wdyr";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import Loader from "./components/Loader";
import reportWebVitals from "./reportWebVitals";
<script src='https://cdn.rawgit.com/emn178/Chart.PieceLabel.js/master/build/Chart.PieceLabel.min.js'></script>;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <PersistGate loading={<Loader />} persistor={persistor}>
        <App />
      </PersistGate>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
