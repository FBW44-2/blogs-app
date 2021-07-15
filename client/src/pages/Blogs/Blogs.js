import React from "react";
import Card from "../../components/Card/Card";

export default function Blogs() {
  return (
    <div className="container Page">
      <h1>Blogs</h1>
      <div class="row">
        <div class="col-4">
          <Card />
        </div>
        <div class="col-4">
          <Card />
        </div>
        <div class="col-4">
          <Card />
        </div>
        <div class="col-4">
          <Card />
        </div>
      </div>
    </div>
  );
}
