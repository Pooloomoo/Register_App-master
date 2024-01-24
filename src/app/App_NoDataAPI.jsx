import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getCurrentUser, getMenu, removeCurrentUser } from "../util/APIUtils";
import { userContext } from "../util/userContext";
import { COMPANY_NAME } from '../constants';
import Main from "../components/layout/Main";
import Navbar from "../components/layout/Navbar";
import Sidebar from "../components/layout/Sidebar";
import Footer from "../components/layout/Footer";
import LoadingIndicator from "../components/common/LoadingIndicator";
import AppHeader from "../components/common/AppHeader";
import Login from "../pages/user/login/Login";
import Home from "../pages/home/Home";
import NotFound from "../pages/notfound/NotFound";
import Signup from "../pages/user/signup/Signup";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

function App(props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const loadCurrentlyLoggedInUser = () => {
    setLoading(true);
    getCurrentUser()
      .then((response) => {
        setCurrentUser(response);
        setAuthenticated(true);
        setLoading(false);
      })
      .catch((error) => {
        removeCurrentUser();
        setLoading(false);
      });
  };

  const handleLogout = (params) => {
    //localStorage.removeItem(ACCESS_TOKEN);
    removeCurrentUser();
    setAuthenticated(false);
    setCurrentUser(null);
    setShowSidebar(false);

    //Alert.success("You're safely logged out!");
    toast("You're safely logged out!");
    window.history.pushState({}, undefined, "/");

  };

  if (loading) {
    return <LoadingIndicator />;
  } else {
    if (authenticated) {
      const ctxValue = {
        user: currentUser,
        doLogout: handleLogout,
        sidebarData: getMenu(currentUser),
      };
      return (
        <div className="wrapper">
          <BrowserRouter>
            <userContext.Provider value={ctxValue}>
              <Sidebar companyName={COMPANY_NAME} showSidebar={showSidebar} toggleSidebar={toggleSidebar} onLogout={handleLogout} />
              <div className="content-wrapper">
                <Navbar {...props} showSidebar={showSidebar} toggleSidebar={toggleSidebar} onLogout={handleLogout}/>
                <Main />
                <Footer />
              </div>
            </userContext.Provider>

            <ToastContainer autoClose={3000} pauseOnHover />
          </BrowserRouter>
        </div>
      );
    } else {
      return (
        <BrowserRouter>
          <div className="app">
            <div className="app-top-box">
              <AppHeader {...props} onLogout={handleLogout} />
            </div>
            <div className="app-body">
              <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route path="/login" element={<Login {...props} handleLoginSuccess={loadCurrentlyLoggedInUser} />}></Route>
                <Route path="/signup" element={<Signup authenticated={authenticated} {...props} />}></Route>
                <Route path="*" Component={NotFound}></Route>
              </Routes>
            </div>
            <ToastContainer autoClose={3000} pauseOnHover />
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default App;
