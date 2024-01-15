import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "../StyleComponent/index.css";
import HRCreateProject from "./routes/HRCreateProject";
import ErrorPage from "./routes/ErrorPage";
import { Route } from "react-router-dom";
import RootLayout from "./component/RootLayout";
import UserMainPage from "./routes/UserMainPage";
import ForgetPassword from "./routes/ForgetPassword";
import RegisterForm from "./routes/RegisterForm";
import RegisterPage from "./component/RegisterPage";
import HrPage from "./routes/HrPage";
import TermOfService from "./routes/TermOfService";
import PrivacyPolicy from "./routes/PrivacyPolicy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <UserMainPage />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
  },
  {
    path: "/forgot",
    element: <ForgetPassword />,
  },
  {
    path: "/term-of-service",
    element: <TermOfService />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },

  {
    path: "/hr",
    element: <HrPage />,
  },
  {
    path: "/profile",
    element: <HRCreateProject />,
  },
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);