import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import { useEffect } from "react";
import GameDetails from "./pages/GameDetails";
import NewGame from "./pages/NewGame";
import { useGames } from "./context/GamesContext";
import Login from "./pages/Login";

function App() {
  const { loadAllGames, games } = useGames();

  useEffect(() => {
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

      axios.request(options).then(function (response) {
        loadAllGames(response.data);
      });
    } else {
      loadAllGames(localStorageItem);
    }
  }, []);

  useEffect(() => {
    if (games.length > 0) {
      localStorage.setItem("games", JSON.stringify(games));
    }
  }, [games]);

  return (
    <Router>
      <Switch>
        <Route exact path="/game/:gameId">
          <GameDetails />
        </Route>

        <Route path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
