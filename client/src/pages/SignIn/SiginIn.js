import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
export default function SiginIn() {
  const [error, setError] = useState();
  const submitHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const userData = {
      email,
      password,
    };

    try {
      const res = await axios.post(baseURL + "/users/signin", userData);
      if (res.data.error) {
        setError(res.data.error);
      } else {
        setError(null);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.userId);

        window.location.replace("/");
      }
      console.log("RES ==> ", res.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="container Page">
      <h1>Sign in</h1>
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
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
