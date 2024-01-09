import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './login';
import SignUp from './routes/signup';
import HrTable from './routes/adminMainHr';
import UserTable from './routes/adminMainUser';
import '../StyleComponent/index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HrTable/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
