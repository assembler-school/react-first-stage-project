import axios from "axios";
import React, { useEffect } from "react";
import { useGames } from "../context/GamesContext";
import GameCard from "./GameCard";

export default function GamesList() {
  const { games, fetchingGames, loadAllGames } = useGames();

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllGames();
  }, []);

  useEffect(() => {
    saveLocalStorage(games);
  }, [games]);

  const saveLocalStorage = (games) => {
    if (games.length > 0) {
      localStorage.setItem("games", JSON.stringify(games));
    }
  };

  const fetchAllGames = () => {
    const localStorageItem = JSON.parse(localStorage.getItem("games"));
    if (!localStorageItem) {
      var options = {
        method: "GET",
        url: "https://free-to-play-games-database.p.rapidapi.com/api/games",
        params: { "sort-by": "alphabetical" },
        headers: {
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
          "x-rapidapi-key":
            "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
        },
      };
      fetchingGames();
      axios.request(options).then(function (response) {
        loadAllGames(response.data);
      });
    } else {
      loadAllGames(localStorageItem);
    }
  };

  return (
    <div className="row gx-5 gy-4 bg-dark mt-3 w-90 mx-auto">
      {(games.length === undefined || games.length < 1) && (
        <>
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
          <GameCard />
        </>
      )}
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
