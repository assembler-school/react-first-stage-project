import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, thumbnail, id }) {
  // console.log(thumbnail);
  return (
    <div className="fw-bold col col-12 col-md-6 col-lg-4">
      <Link to={`game/${id}`}>
        <div className="row">
          <h4 className="text-center">{title}</h4>
          <img src={thumbnail} alt={title} />
        </div>
      </Link>
    </div>
  );
}
