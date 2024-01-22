import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import "../StyleComponent/index.css";
import HRCreateProject from "./routes/HR/HrCreateProject";
import ErrorPage from "./routes/ErrorPage";
import { Route } from "react-router-dom";
import RootLayout from "./components/RootLayout";
import UserMainPage from "./routes/user/UserMainPage";
import ForgetPassword from "./routes/ForgetPassword";
import RegisterForm from "./routes/RegisterForm";
import RegisterPage from "./components/RegisterPage";
import HrPage from "./routes/HR/HrPage";
import TermOfService from "./routes/TermOfService";
import PrivacyPolicy from "./routes/PrivacyPolicy";
import EditHr from './routes/admin/editHr';
import EditUser from './routes/admin/editUser';
import CreateUser from './routes/admin/createUser';
import CreateHr from './routes/admin/createHr';
import AdminMainHr from './routes/admin/adminMainHr';
import AdminMainUser from './routes/admin/adminMainUser';
import UserProfile from "./routes/user/userProfile";
import HrEditProject from "./routes/HR/HrEditProject";
import HrManageUserProject from './routes/HR/HrManageUserProject';
import HrEditUserProject from "./routes/HR/HrEditUserProject";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <UserMainPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <RegisterForm />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/forgot",
    element: <ForgetPassword />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/term-of-service",
    element: <TermOfService />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
    // errorElement: <ErrorPage />,
  },

  {
    path: "/hr",
    element: <HrPage />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <HRCreateProject />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/edit/user/:id",
    element: <EditUser/>
  },
  {
    path: "/edit/hr/:id",
    element: <EditHr/>
  },
  {
    path: "/create/user",
    element: <CreateUser/>
  },
  {
    path: "/create/hr",
    element: <CreateHr/>
  },
  {
    path: "/admin/hr",
    element: <AdminMainHr/>,
  },
  {
    path: "/admin/user",
    element: <AdminMainUser/>,
  },
  {
    path: "/hr/user-profile",
    element: <UserProfile />,
    // errorElement: <ErrorPage />,
  },
  {
    path: "/hr/edit/project/:id",
    element: <HrEditProject />,
  },
  {
    path: "/hr/create/project",
    element: <HRCreateProject />,
  },
  {
    path: "/hr/user/project/:id",
    element: <HrManageUserProject />
  },
  {
    path: "/hr/edit/userproject/:id",
    element: <HrEditUserProject />
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);