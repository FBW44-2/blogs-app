import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Moment from "react-moment";
import "./MyBlogs.css";

export default function MyBlogs({ user }) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const blogData = await axios.get(baseURL + "/blogs/user-blogs");
      setBlogs(blogData.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  const onDeleteBlog = async (id) => {
    setLoading(true);
    try {
      const blogData = await axios.delete(baseURL + "/blogs/" + id);

      setLoading(false);
      window.location.reload();
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlogs();
  }, []);
  console.log(blogs);
  console.log(user);

  return (
    <div className="container Page">
      <h1>My Blogs</h1>
      <h4>Hallo {user.userName}</h4>
      <h5>{user.email}</h5>

      <Link to="/create-blog" className="btn btn-outline-success mt-2">
        NEW BLOG
      </Link>
      <ul className="list-group mt-5 ">
        {loading ? (
          <Spinner />
        ) : (
          blogs.map((blog, idx) => (
            <li key={idx} className="list-group-item Blog">
              <img
                src={blog.coverImage}
                className="mx-1"
                width="60"
                height="60"
              />
              <div className="BlogContent">
                {blog.title + " / "} <Moment date={blog.date} fromNow />
              </div>
              <div className="Actions">
                <Link
                  to={"/edit-blog/" + blog._id}
                  className="btn btn-outline-success "
                >
                  Edit
                </Link>
                <button
                  onClick={() => onDeleteBlog(blog._id)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
