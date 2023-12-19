import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.js';
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from './pages/AboutUs/AboutUs';
import BookPage from './pages/BookPage/BookPage';
import Basket from './pages/Basket/Basket';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import "./index.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CatalogPage from './pages/CatalogPage/CatalogPage.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/about",
    element: <AboutUs/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalog",
    element: <CatalogPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/catalog/:id",
    element: <BookPage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/cart",
    element: <Basket/>,
    errorElement: <ErrorPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);

