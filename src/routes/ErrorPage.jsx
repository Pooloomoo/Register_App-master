import React from "react";
import NavBar from "../component/navBar";
import Footer from "../component/footer";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="Body">
      <NavBar />
      <div className="container mt-5">
        <div className="text-center p-4">
          <h1 className="display-4">Oops!</h1>
          <h2 className="display-5">Something went wrong.</h2>
          <p className="lead">
            We're sorry, but there seems to be an error. Please try again later.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ErrorPage;