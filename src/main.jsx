import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login';
import SignUp from './routes/signup';
import AdminMainHr from './routes/adminMainHr';
import AdminMainUser from './routes/adminMainUser';
import '../StyleComponent/index.css';
import Homepage from './routes/HomePage';
import EditHr from './routes/editHr';
import EditUser from './routes/editUser'

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminMainHr/>,
  },
  {
    path: "/edit/:id",
    element: <EditHr/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
