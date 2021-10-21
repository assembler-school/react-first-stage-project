import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, thumbnail, id }) {
  return (
    <div className="fw-bold col col-12 col-md-6 col-lg-4 ">
      <Link className="text-decoration-none text-light" to={`game/${id}`}>
        <div className="row border rounded-3 mb-4 py-3 bg-dark bg-gradient">
          <h4 className="text-center ">{title}</h4>
          <img className="img-rounded" src={thumbnail} alt={title} />
        </div>
      </Link>
    </div>
  );
}
