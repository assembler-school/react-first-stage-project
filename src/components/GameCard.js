import React from "react";
import { Link } from "react-router-dom";
import { useGames } from "../context/GamesContext";

export default function GameCard({ title, thumbnail, id }) {
  const { games } = useGames();
  if (games.length > 0) {
    var linkTitle = title.split(": ").join(":");
    linkTitle = linkTitle.split(" ").join("-");
    console.log(linkTitle);
  }
  return (
    <div className="col-12 col-sm-6 col-md-4 ">
      {games.length > 0 && (
        <Link
          className="text-decoration-none text-light"
          to={`game/${linkTitle}`}
        >
          <div className="row border rounded-3 py-3 bg-secondary h-100 overflow-hidden">
            <h4 className="text-center text-light">{title}</h4>
            {(games.length === undefined || games.length < 1) && (
              <>
                <div class="loading-api-img"></div>
              </>
            )}

            {games.length > 0 && (
              <img className="img-fluid" src={thumbnail} alt={title} />
            )}
          </div>
        </Link>
      )}
    </div>
  );
}
