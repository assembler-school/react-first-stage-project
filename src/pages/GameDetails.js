import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useGames } from "../context/GamesContext";
import { AuthContext } from "../context/AuthContext";

export default function GameDetails() {
  const { gameDetails, loadedGame, loadGame, startFetch, endFetch, fetching } =
    useGames();

  const { isLogged } = useContext(AuthContext);

  const { gameId } = useParams();

  useEffect(() => {
    var options = {
      method: "GET",
      url: `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      params: { id: gameId },
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
      },
    };
    startFetch();
    axios.request(options).then(function (response) {
      loadGame(response.data);
      endFetch();
    });
  }, [gameId]);

  const {
    title,
    thumbnail,
    description,
    status,
    developer,
    genre,
    platform,
    publisher,
    game_url,
    release_date,
    minimum_system_requirements,
  } = gameDetails;
  return (
    <>
      {!isLogged && <Redirect to="/" />}
      <Layout>
        {gameDetails === undefined && <div>ERROR</div>}
        {!fetching && loadedGame && (
          <div className="container">
            <h2>{title}</h2>
            <div className="row">
              <div className="col col-6">
                <img src={thumbnail} alt={title} />
              </div>
              <div className="col col-6">
                <p>Genre: {genre}</p>
                <p>Platform: {platform}</p>
                <p>Status: {status}</p>
                <p>Launch date: {release_date}</p>
                <p>Publisher: {publisher}</p>
                <p>Developer: {developer}</p>
              </div>
            </div>
            <div>
              <p>{description}</p>
              <p>Official page: {game_url}</p>
              {minimum_system_requirements && (
                <ul>
                  <li>Graphics: {minimum_system_requirements.graphics}</li>
                  <li>Memory: {minimum_system_requirements.memory}</li>
                  <li>OS: {minimum_system_requirements.os}</li>
                  <li>Processor: {minimum_system_requirements.processor}</li>
                  <li>Storage: {minimum_system_requirements.storage}</li>
                </ul>
              )}
            </div>
          </div>
        )}
      </Layout>
    </>
  );
}
