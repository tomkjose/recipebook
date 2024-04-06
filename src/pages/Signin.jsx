import React, { useEffect } from "react";
import SignInCard from "../components/SignInCard/SignInCard";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Footer from "../components/Footer/Footer";
function Signin() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user !== null) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="auth">
      <div className="auth__card">
        <h2 className="auth__title">Sign In</h2>
        <SignInCard />
        <p className="auth__message">
          Don't have an account?{" "}
          <Link to="/signup" className="auth__link">
            {" "}
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
