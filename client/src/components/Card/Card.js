import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div class="card Card">
      <img
        src="https://www.dresden.de/media/bilder/sport/1024_LH_Fit_im_Park_2021.jpg"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  );
}