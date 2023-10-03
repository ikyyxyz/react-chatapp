import React from "react";
import { FcAddImage } from "react-icons/fc";

export const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign In</button>
        </form>
        <p>You dont have an account? Register</p>
      </div>
    </div>
  );
};
