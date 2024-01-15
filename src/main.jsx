import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login';
import SignUp from './routes/signup';
import AdminMainHr from './routes/adminMainHr';
import UserTable from './routes/adminMainUser';
import '../StyleComponent/index.css';
import Homepage from './routes/HomePage';
import Edit from './routes/edit';

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminMainHr/>,
  },
  {
    path: "/edit/:id",
    element: <Edit/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
