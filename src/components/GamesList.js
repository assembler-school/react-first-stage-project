import React, { useContext } from "react";
import { useGames } from "../context/GamesContext";
import { HomeContext } from "../context/HomeContext";
import GameCard from "./GameCard";

export default function GamesList() {
  const { state } = useContext(HomeContext);
  const { games } = useGames();
  console.log(games);

  return (
    <div className=" row bg-success">
      {games.length > 0 &&
        games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            thumbnail={game.thumbnail}
            id={game.id}
          />
        ))}
    </div>
  );
}
