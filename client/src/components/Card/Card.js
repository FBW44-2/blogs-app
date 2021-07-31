import React from "react";
import "./Card.css";
import Moment from "react-moment";

export default function Card({ blog }) {
  return (
    <div className="card Card">
      <img src={blog.coverImage} class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          By: <img src={blog.userId.avatar} className="Avatar" />{" "}
          {" " + blog.userId.userName}
        </p>
        <h4 class="card-title">{blog.title}</h4>
      </div>
      <div class="card-footer">
        <small class="text-muted">Category: {blog.category}</small>
        <br />
        <small class="text-muted">
          Last updated <Moment date={blog.date} fromNow />
        </small>
      </div>
    </div>
  );
}
