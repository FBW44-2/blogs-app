import React from "react";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
export default function Blogs() {
  return (
    <div className="container Page">
      <h1>Blogs</h1>
      <div class="row">
        <div class="col-4">
          <Link to="/blog/xxxx">
            <Card />
          </Link>
        </div>
        <div class="col-4">
          <Link to="/blog/xxxx">
            <Card />
          </Link>
        </div>
        <div class="col-4">
          <Link to="/blog/xxxx">
            <Card />
          </Link>
        </div>
        <div class="col-4">
          <Link to="/blog/xxxx">
            <Card />
          </Link>
        </div>
      </div>
    </div>
  );
}
