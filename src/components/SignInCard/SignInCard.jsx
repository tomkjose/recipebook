import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignin } from "../../api";
import {
  fetchUserFaliure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

function SignInCard() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchUserRequest());
    try {
      const userDetails = await userSignin(email, password);
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(fetchUserSuccess(userDetails));
      navigate("/");
    } catch (error) {
      dispatch(fetchUserFaliure(error.message));
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSignInSubmit} className="auth__form">
      <div className="auth__container">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
          className="auth__input"
        />
      </div>
      <div className="auth__container">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          className="auth__input"
          placeholder="Password"
          required
        />
        <span
          className="material-symbols-outlined"
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer", color: "grey", paddingRight: "0.6rem" }}
        >
          {showPassword ? "visibility_off" : "visibility"}
        </span>
      </div>
      <button type="submit" className="auth__btn">
        Sign In
      </button>
    </form>
  );
}

export default SignInCard;
