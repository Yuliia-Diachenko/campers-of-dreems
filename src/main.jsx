import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store.js";
import "./index.css";
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter>
          <App />  
        </BrowserRouter> 
      {/* </PersistGate> */}
    </Provider>    
  </React.StrictMode>
)
