import React from "react";
import { Link } from "react-router-dom";
import "./MyBlogs.css";

export default function MyBlogs({ user }) {
  return (
    <div className="container Page">
      <h1>My Blogs</h1>
      <h4>Hallo {user.userName}</h4>
      <Link to="/create-blog" className="btn btn-outline-success mt-2">
        NEW BLOG
      </Link>
      <ul className="list-group mt-5 ">
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 1</div>
          <div className="Actions">
            <Link to="/edit-blog" className="btn btn-outline-success ">
              Edit
            </Link>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 2</div>
          <div className="Actions">
            <Link to="/edit-blog" className="btn btn-outline-success ">
              Edit
            </Link>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </li>
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 3</div>
          <div className="Actions">
            <Link to="/edit-blog" className="btn btn-outline-success ">
              Edit
            </Link>
            <button type="button" className="btn btn-outline-danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}
