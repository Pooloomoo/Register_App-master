import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
} from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getCurrentUser, getMenu, removeCurrentUser } from "../util/APIUtils";
import { userContext } from "../util/userContext";
import { COMPANY_NAME } from "../constants";
import Main, { routeList } from "../componentsAuth/layout/Main";
// import Navbar from "../componentsAuth/NavBar";
// import Sidebar from "../components/layout/Sidebar";
// import Footer from "../components/layout/Footer";
import LoadingIndicator from "../componentsAuth/common/LoadingIndicator";
import AppHeader from "../componentsAuth/common/AppHeader";
import Login from "../pages/user/login/Login";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Signup from "../pages/user/signup/Signup";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "../StyleComponent/index.css";
import HRCreateProject from "../pages/routes/HR/HrCreateProject";
// import ErrorPage from "./routes/ErrorPage";
import RootLayout from "../components/RootLayout";
import UserMainPage from "../pages/routes/user/UserMainPage";
import ForgetPassword from "../pages/routes/ForgetPassword";
// import RegisterForm from "../pages/routes/RegisterForm";
// import RegisterPage from "./components/RegisterPage";
import HrPage from "../pages/routes/HR/HrPage";
import TermOfService from "../pages/routes/TermOfService";
import PrivacyPolicy from "../pages/routes/PrivacyPolicy";
import EditHr from "../pages/routes/admin/editHr";
import EditUser from "../pages/routes/admin/editUser";
import CreateUser from "../pages/routes/admin/createUser";
import CreateHr from "../pages/routes/admin/createHr";
import AdminMainHr from "../pages/routes/admin/adminMainHr";
import AdminMainUser from "../pages/routes/admin/adminMainUser";
import UserProfile from "../pages/routes/user/userProfile";
import HrEditProject from "../pages/routes/HR/HrEditProject";
import HrManageUserProject from "../pages/routes/HR/HrManageUserProject";
import HrEditUserProject from "../pages/routes/HR/HrEditUserProject";
import ErrorPage from "../pages/routes/errorPage";
import NavBar from "../components/NavBar";
function App(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    loadCurrentlyLoggedInUser();
    /* if (currentUser) {
      console.log("userfound");
      setAuthenticated(true);
    }*/
    return () => {
      console.log("cleanup");
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log("toggle show sidebar");
  };

  const loadCurrentlyLoggedInUser = async () => {
    setLoading(true);
    /*getCurrentUser()
      .then((response) => {
        
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        removeCurrentUser();
        setLoading(false);
      });*/
    //setTimeout(()=>{setLoading(false)}, 500);

    try {
      let response = await getCurrentUser();
      setCurrentUser(response);
      setAuthenticated(true);
      setLoading(false);
    } catch (error) {
      removeCurrentUser();
      setLoading(false);
    }
  };

  const handleLogout = (params) => {
    //localStorage.removeItem(ACCESS_TOKEN);
    removeCurrentUser();
    setAuthenticated(false);
    setCurrentUser(null);
    setShowSidebar(false);


    //Alert.success("You're safely logged out!");
    //toast("You're safely logged out!");
    //window.history.pushState({}, undefined, "/");
    window.location.href="http://localhost:3000/";
  };
  
  const internalRouter = createBrowserRouter([
    {
      path: "/",
      element: (
        <InternalRoot
          currentUser={currentUser}
          showSidebar={showSidebar}
          toggleSidebar={toggleSidebar}
          handleLogout={handleLogout}
        />
      ),
      errorElement: <ErrorPage />,

      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            // ...routeList

            {
              path: "/",
              element: <RootLayout />,
              // errorElement: <ErrorPage />,
            },
            {
              path: "/user-profile",
              element: <UserProfile />,
              // errorElement: <ErrorPage />,
            },
            {
              path: "/home",
              element: <UserMainPage />,
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
              element: <EditUser />,
            },
            {
              path: "/edit/hr/:id",
              element: <EditHr />,
            },
            {
              path: "/create/user",
              element: <CreateUser />,
            },
            {
              path: "/create/hr",
              element: <CreateHr />,
            },
            {
              path: "/admin/hr",
              element: <AdminMainHr />,
            },
            {
              path: "/admin/user",
              element: <AdminMainUser />,
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
              element: <HrManageUserProject />,
            },
            {
              path: "/hr/edit/userproject/:id",
              element: <HrEditUserProject />,
            },
          ],
        },
      ],
    },
  ]);

  const externalRouter = createBrowserRouter([
    {
      path: "/",
      element: <ExternalRoot handleLogout={handleLogout} />,
      errorElement: <ErrorPage />,
      children: [
        {
          errorElement: <ErrorPage />,
          children: [
            { index: true, Component: Home },
            {
              path: "login",
              element: (
                <Login
                  {...props}
                  handleLoginSuccess={loadCurrentlyLoggedInUser}
                />
              ),
            },
            {
              path: "signup",
              element: <Signup authenticated={authenticated} {...props} />,
            },
            { path: "forgot", element: <ForgetPassword /> },
          ],
        },
      ],
    },
  ]);

  if (loading) {
    return <LoadingIndicator />;
  } else {
    if (authenticated) {
      return <RouterProvider router={internalRouter} />;
    } else {
      return <RouterProvider router={externalRouter} />;
    }
  }
}

function InternalRoot({
  currentUser,
  showSidebar,
  toggleSidebar,
  handleLogout,
}) {
  const ctxValue = {
    user: currentUser,
    doLogout: handleLogout,
    sidebarData: getMenu(currentUser),
  };

  return (
    <div className="wrapper">
      <userContext.Provider value={ctxValue}>
        {/* <Sidebar companyName={COMPANY_NAME} showSidebar={showSidebar} toggleSidebar={toggleSidebar} onLogout={handleLogout} /> */}
        <div className="content-wrapper" style={{margin:'0'}}>
          {/* <Navbar showSidebar={showSidebar} toggleSidebar={toggleSidebar} onLogout={handleLogout} /> */}
          {currentUser ? (
            <>
              <NavBar onLogout={handleLogout} />
            </>
          ) : null}
          <Main />
          {/* <Footer /> */}
        </div>
      </userContext.Provider>

      <ToastContainer autoClose={3000} pauseOnHover />
    </div>
  );
}

function ExternalRoot({ handleLogout }) {
  return (
    <div className="app">
      <div className="app-top-box">
        <AppHeader onLogout={handleLogout} />
      </div>
      <div className="app-body">
        <Outlet />
      </div>
      <ToastContainer autoClose={3000} pauseOnHover />
    </div>
  );
}
export default App;
