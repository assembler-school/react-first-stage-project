import React from "react";

export default function GameCard({ title, thumbnail }) {
  console.log(thumbnail);
  return (
    <div className="fw-bold col col-4">
      {title}
      <img src={thumbnail} alt={title} />
    </div>
  );
}
