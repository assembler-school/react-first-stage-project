import React, { useContext } from "react";
import { HomeContext } from "../context/HomeContext";
import GameCard from "./GameCard";

export default function GamesList() {
  const { state } = useContext(HomeContext);
  const gamesList = state.games;

  return (
    <div className=" row bg-success">
      {gamesList.length > 0 &&
        gamesList.map((game) => (
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
