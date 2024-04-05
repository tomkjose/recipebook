import React, { useState } from "react";
import { userSignup } from "../../api";
import { useDispatch } from "react-redux";
import {
  fetchUserFaliure,
  fetchUserRequest,
  fetchUserSuccess,
} from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

function SignUpCard() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchUserRequest());
    try {
      const userDetails = await userSignup(
        firstName + " " + lastName,
        email,
        password
      );
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
    <form onSubmit={handleSignUpSubmit} className="auth__form">
      <div className="auth__name__container">
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          className="auth__input"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="LastName"
          onChange={(e) => setLastName(e.target.value)}
          className="auth__input"
          placeholder="Last Name"
          required
        />
      </div>
      <div className="auth__container">
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          className="auth__input"
          placeholder="E-mail"
          required
        />
      </div>
      <div className="auth__container">
        <input
          type={showPassword ? "text" : "password"}
          name="password"
          value={password}
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
        Sign Up
      </button>
    </form>
  );
}

export default SignUpCard;
