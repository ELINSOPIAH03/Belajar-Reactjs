import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Profile from "./components/Profile";
import Introduction from "./components/Introduction";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Introduction name="Elin Sopiah"/>
    <Introduction name="Nurul Amelia"/>
    <Profile/>
  </React.StrictMode>
);

