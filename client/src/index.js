import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from "./reportWebVitals";
// import { BrowserRouter } from "react-router-dom";
import { createStore } from "./store/createStore"
import { Provider} from "react-redux";

const store = createStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App/>
      </Provider>
  </React.StrictMode>
);

reportWebVitals();
