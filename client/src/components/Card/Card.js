import React from "react";
import "./Card.css";
import Moment from "react-moment";

export default function Card({ blog }) {
  return (
    <div className={blog.views == 0 ? "card Card NewCard" : "card Card"}>
      <div
        className="CardImg"
        style={{ backgroundImage: `url(${blog.coverImage})` }}
      ></div>
      <div class="card-footer">
        <small class="text-muted">
          Last updated <Moment date={blog.update} fromNow />
        </small>
      </div>
      <div class="card-body">
        <p class="card-text">
          By: <img src={blog.userId.avatar} className="Avatar" />{" "}
          {" " + blog.userId.userName + " | "}{" "}
          <Moment date={blog.date} fromNow />
        </p>
        <small class="text-muted">Category: {blog.category}</small>
        <h4 class="card-title">{blog.title}</h4>
      </div>

      {blog.views == 0 ? (
        <span className="badge badge-success Alert">New</span>
      ) : null}
      {blog.views != 0 ? (
        <span className="badge badge-pill badge-info CardViews">
          <i class="fas fa-eye"></i> {blog.views}
        </span>
      ) : null}
    </div>
  );
}

/** <img src={blog.coverImage} class="card-img-top CardImg" alt="..." /> */
