import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, createRoutesFromElements, Route, NavLink, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import List from "./pages/listUser";
import Regis from "./pages/registrationUser";
import Error from "./pages/error";

import './style/Default.css';

import store from './redux/store';
import { Provider } from 'react-redux';

export default function App() {
  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path='/list' element={<List />} />
        <Route path="/registration" element={<Regis />} />
        <Route path="*" element={<Error />} />
      </Route>
    )
  )

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

const Root = () => {
  return (
    <>
      <div style={{margin: '24px'}}>
        <NavLink className={({isActive}) => isActive ? 'active' : 'link'} to="/list">User List</NavLink> 
        <NavLink className={({isActive}) => isActive ? 'active' : 'link'} to="/registration">Registration User</NavLink> 
      </div>

      <div>
        <Outlet />
      </div>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
