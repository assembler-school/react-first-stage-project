import React from "react";
import { useGames } from "../context/GamesContext";
import GameCard from "./GameCard";

export default function GamesList() {
  const { games } = useGames();

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
