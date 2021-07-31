import React, { useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import ReactQuill from "react-quill";
export default function CreateBlog() {
  const [success, setSuccess] = useState();
  const [error, setError] = useState();
  const [content, setContent] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const coverImage = e.target.coverImage.value;
    const category = e.target.category.value;
    const blogData = {
      content,
      category,
      coverImage,
      title,
    };

    console.log("blogData ==> ", blogData);
    try {
      const res = await axios.post(baseURL + "/blogs/create", blogData);
      if (res.data.error) {
        setError(res.data.error);
        setSuccess(null);
      } else {
        setError(null);
        setSuccess("New Blog Created successfully, redirect in 1s");
        setTimeout(() => {
          window.location.replace("/blogs");
        }, 1000);
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
      {success && (
        <div className="alert alert-success" role="alert">
          {success}
        </div>
      )}
      {error && (
        <div class="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Title
          </label>
          <input
            name="title"
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
            name="category"
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
            name="coverImage"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Content
          </label>
          <ReactQuill value={content} onChange={setContent} theme="snow" />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
