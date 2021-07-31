import React, { useEffect, useState } from "react";
import axios from "axios";
import baseURL from "../../config/baseURL";
import { useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import Moment from "react-moment";

import "./Blog.css";
export default function Blog() {
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams();
  const getBlog = async () => {
    setLoading(true);
    try {
      const blogData = await axios.get(baseURL + "/blogs/" + id);
      setBlog(blogData.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };
  useEffect(() => {
    getBlog();
  }, []);
  console.log(blog);
  console.log("id ==> ", id);

  return (
    <div className="container Page">
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1>{blog.title}</h1>
          <figcaption className="blockquote-footer mt-2">
            By: <img src={blog.userId.avatar} className="Avatar" />{" "}
            {" " + blog.userId.userName}
            <cite title="Source Title">
              <Moment date={blog.date} fromNow />
            </cite>
          </figcaption>
          <p
            className="Content"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          ></p>
        </>
      )}
    </div>
  );
}
