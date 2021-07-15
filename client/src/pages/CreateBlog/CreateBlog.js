import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";

export default function CreateBlog() {
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
      <h1>Create Blog</h1>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="username"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Category
          </label>
          <input
            name="email"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Cover Image URL
          </label>
          <input
            name="password"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Content
          </label>
          <textarea
            name="content"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
