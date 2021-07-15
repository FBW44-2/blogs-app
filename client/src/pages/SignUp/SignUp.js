import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";

export default function SignUp() {
  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const userName = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    const userData = {
      userName,
      email,
      password,
      confirmPassword,
    };

    console.log("Sign up data ==> ", userData);
    try {
      const res = await axios.post(baseURL + "/users/signup", userData);
      if (res.data.error) {
        setError(res.data.error);
        setSuccess(null);
      } else {
        setError(null);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);
        setSuccess("registered successfully, redirect in 3s");
        setTimeout(() => {
          window.location.replace("/");
        }, 3000);
      }
      console.log("RES ==> ", res.data);
    } catch (e) {
      console.log(e);
    }
    // POST req  ==> http://localhost:5000/api/v1/signup
  };
  return (
    <div className="container Page">
      <h1>Sign Up</h1>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div class="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Username
          </label>
          <input
            name="username"
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Confirm Password
          </label>
          <input
            name="confirmPassword"
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
