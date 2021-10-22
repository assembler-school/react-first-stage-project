import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({ title, thumbnail, id }) {
  return (
    <div className="col-12 col-sm-6 col-md-4 ">
      <Link className="text-decoration-none text-light" to={`game/${id}`}>
        <div className="row border rounded-3 py-3 bg-secondary h-100 overflow-hidden">
          <h4 className="text-center text-light">{title}</h4>
          <div className="">
            <img
              // className="img-responsive img-rounded w-100"
              className="img-fluid"
              src={thumbnail}
              alt={title}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
