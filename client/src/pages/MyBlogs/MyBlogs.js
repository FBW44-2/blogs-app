import React from "react";
import "./MyBlogs.css";

export default function MyBlogs({ user }) {
  return (
    <div className="container Page">
      <h1>My Blogs</h1>
      <h4>Hallo {user.userName}</h4>
      <button type="button" className="btn btn-outline-success mt-2">
        NEW BLOG
      </button>
      <ul className="list-group mt-5 ">
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 1</div>
          <div className="Actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 2</div>
          <div className="Actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
        <li className="list-group-item Blog">
          <div className="BlogContent">Blog 3</div>
          <div className="Actions">
            <button>Edit</button>
            <button>Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
}
