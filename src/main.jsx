import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "../StyleComponent/index.css";
import HRCreateProject from "./routes/HRCreateProject";
import ErrorPage from "./routes/errorPage";
import { Route } from "react-router-dom";
import RootLayout from "./component/RootLayout";
import UserMainPage from "./routes/UserMainPage";
import ForgetPassword from "./routes/ForgetPassword";
import RegisterForm from "./routes/RegisterForm";
import RegisterPage from "./component/RegisterPage";
import HrPage from "./routes/HrPage";
import { AuthProvider } from './context/AuthProvider';
import Login from './component/Login';
import TermOfService from './routes/TermOfService';
import PrivacyPolicy from './routes/PrivacyPolicy';
import HReditProject from "./routes/HREditProject";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <UserMainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot",
    element: <ForgetPassword />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/term-of-service",
    element: <TermOfService />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/hr",
    element: <HrPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/hrcreateproject",
    element: <HRCreateProject />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: '/hreditproject/:id',
    element: <HReditProject/>
  }
]);
/* createRoutesFromElements(
    <Route path="/" element={<RootLeyout />}>
      <Route index element={<SignUp />} />
      <Route path="user" element={<SignUp />}/>

      <Route path="hr">
        <Route path="createproject" element={<HRCreateProject />} />
      </Route>
    
      <Route path="forgot" element={<ForgetPassword />} />
      <Route path="register" element={<RegisterPage />} />
    </Route>
  ) */

// [
//   {
//     path: "/",
//     element: <SignUp/>,
//     errorElement: <ErrorPage />,
//   },
//   {
//     path: "/hr/createproject",
//     element: <HRCreateProject />,
//     errorElement: <ErrorPage />,
//   }
// ]

  const App = () => {
    return (
      <React.StrictMode>
        <RouterProvider router={router}>
          <div>
          <AuthProvider>
            <UserMainPage />
          </AuthProvider>
          <RegisterForm />
          </div>
          
        </RouterProvider>
      </React.StrictMode>
    );
  };
  
  
  ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
  )