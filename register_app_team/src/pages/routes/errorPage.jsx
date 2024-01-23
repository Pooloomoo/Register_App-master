import React from "react";
import NavBar from "../components/์NavBar";
import { Link } from "react-router-dom";
import '../../StyleComponent/index.css';
import { useRouteError } from "react-router-dom";


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="Body ">
      {/* <div className="container mt-5">
        <div className="text-center p-4">
          <h1 className="display-4">Oops!</h1>
          <h2 className="display-5">Something went wrong.</h2>
          <p className="lead">
            We're sorry, but there seems to be an error. Please try again later.
          </p>
          <Link to="/" className="btn btn-warning text-light link-dark">
            Back to Home
          </Link>
        </div>
      </div> */}

      <div className="text-center p-4">
        <h1 className="display-4">Oops!</h1>
        <h2 className="display-5">Something went wrong.</h2>
        <p>
        <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/" className="go-back-btn btn btn-warning text-light link-dark">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
export default ErrorPage;