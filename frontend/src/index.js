import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./pages/frontend/state/store";
import { ShoppingContextProvider } from "../src/pages/frontend/context/ShoppingContext.tsx"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ShoppingContextProvider>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ShoppingContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
