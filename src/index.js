import React from "react";
import ReactDOM from "react-dom";
import { Provider as SessionProvider } from "./contexts/SessionContext";
import reportWebVitals from "./reportWebVitals";
import App from "./routes/App";
import "./styles/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <App />
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
