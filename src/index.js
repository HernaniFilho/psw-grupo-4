import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Home_page from './components/home/home.jsx';
import Login_page from './components/Login/Login.jsx';
import Register_page from './components/cadastro/cadastro.jsx';

import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { CarrinhoProvider } from './context/CarrinhoContext.js';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home_page/>,
  },
  {
    path: "Login",
    element: <Login_page/>,
  },
  {
    path: "Cadastro",
    element: <Register_page/>,
  },
  {
    path:"app",
    element:<App/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CarrinhoProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </CarrinhoProvider>,
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
