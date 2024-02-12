import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from './pages/AboutUs/AboutUs';
import BookPage from './pages/BookPage/BookPage';
import Basket from './pages/Basket/Basket';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import "./index.css"

import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

