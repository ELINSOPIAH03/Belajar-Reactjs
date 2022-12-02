import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from "./components/Profile";
import Introduction from "./components/Introduction";
import Time from "./components/Time";
import Handlerevent from "./components/Handlerevent";
import Form from "./components/Formpengirim";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Introduction name="Elin Sopiah"/>
    <Introduction name="Nurul Amelia"/>
    <Profile/>
    <Time start="0"/>
    <Handlerevent/>
    <Form/>
  </React.StrictMode>
);

