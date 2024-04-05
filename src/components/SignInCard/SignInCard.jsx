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
  return (
    <form onSubmit={handleSignInSubmit}>
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
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignInCard;
