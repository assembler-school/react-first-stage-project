import React from "react";

export default function GameCard({ title, thumbnail }) {
  console.log(thumbnail);
  return (
    <div className="fw-bold col col-4">
      <div className="row">
        <h4 className="text-center">{title}</h4>
        <img src={thumbnail} alt={title} />
      </div>
    </div>
  );
}
