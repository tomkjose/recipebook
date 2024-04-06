import React, { useEffect } from "react";
import SignUpCard from "../components/SignUpCard/SignUpCard";
import "../styles/auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Signup() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user && Object.keys(user).length !== 0) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div className="auth">
      <div className="auth__card">
        <h2 className="auth__title">Sign Up</h2>
        <SignUpCard />
        <p className="auth__message">
          Have an account?
          <Link to="/signin" className="auth__link">
            {" "}
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
