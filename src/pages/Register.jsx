import React from "react";
import { FcAddImage } from "react-icons/fc";

export const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="file" id="file" style={{ display: "none" }} />
          <label htmlFor="file">
            <FcAddImage /> <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>Do you have an account? Login</p>
      </div>
    </div>
  );
};
