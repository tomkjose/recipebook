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

  return (
    <form onSubmit={handleSignUpSubmit}>
      <div>
        <input
          type="text"
          name="firstName"
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="LastName"
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail"
          required
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpCard;
