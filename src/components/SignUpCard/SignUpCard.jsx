import React, { useState } from "react";
import { userSignup } from "../../api";
import { useDispatch } from "react-redux";
import {
  fetchUserFailure,
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
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchUserRequest());
    try {
      const userDetails = await userSignup(
        `${firstName} ${lastName}`,
        email,
        password
      );
      localStorage.setItem("user", JSON.stringify(userDetails));
      dispatch(fetchUserSuccess(userDetails));
      navigate("/");
    } catch (error) {
      if (error.response && error.response.status === 409) {
        setError("Email already exists.");
      } else if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error.message;
        if (errorMessage.includes("WEAK_PASSWORD")) {
          setError("Password must be at least 6 characters long.");
        } else {
          setError("An error occurred. Please try again.");
        }
      } else {
        setError("An error occurred. Please try again.");
      }
      dispatch(fetchUserFailure(error.message));
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
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="auth__input"
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={lastName}
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
          value={email}
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
      {error && <div className="error__message">{error}</div>}
      <button type="submit" className="auth__btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignUpCard;
