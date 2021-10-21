import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, thumbnail, id }) {
  return (
    <div className="fw-bold col col-12 col-md-6 col-lg-4 my-3 ">
      <Link className="text-decoration-none text-light" to={`game/${id}`}>
        <div
          style={{ height: "100%" }}
          className="row border rounded-3 mb-4 py-3 bg-secondary"
        >
          <h4 className="text-center text-light">{title}</h4>
          <img
            style={{ borderRadius: "30px" }}
            className="img-rounded"
            src={thumbnail}
            alt={title}
          />
        </div>
      </Link>
    </div>
  );
}
