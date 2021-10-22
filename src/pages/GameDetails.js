import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useParams, Redirect } from "react-router-dom";
import axios from "axios";
import { useGames } from "../context/GamesContext";
import { AuthContext } from "../context/AuthContext";

export default function GameDetails() {
  const {
    gameDetails,
    loadedGameDetails,
    fetchGameDetails,
    loadGameDetails,
    resetLoadedGameDetails,
  } = useGames();

  const { isLogged } = useContext(AuthContext);

  const { gameId } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    resetLoadedGameDetails();
  }, []);

  useEffect(() => {
    fetchGame(gameId);
  }, [gameId]);

  const fetchGame = (gameId) => {
    var options = {
      method: "GET",
      url: `https://free-to-play-games-database.p.rapidapi.com/api/game`,
      params: { id: gameId },
      headers: {
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "x-rapidapi-key": "23e233b049msh4485b68fa7318bdp11fd05jsn2ac4d49d92a1",
      },
    };
    fetchGameDetails();
    axios.request(options).then(function (response) {
      loadGameDetails(response.data);
    });
  };
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
        <div className="text-light border rounded-3 bg-dark bg-gradient py-3 mt-3 game-details">
          {loadedGameDetails && <h2 className="pb-3">{title}</h2>}
          <div className="row">
            <div className="col col-6">
              {loadedGameDetails && (
                <img className="w-75" src={thumbnail} alt={title} />
              )}
            </div>
            <div className="col col-6">
              {loadedGameDetails && (
                <>
                  <p>Genre: {genre}</p>
                  <p>Platform: {platform}</p>
                  <p>Status: {status}</p>
                  <p>Launch date: {release_date}</p>
                  <p>Publisher: {publisher}</p>
                  <p>Developer: {developer}</p>
                </>
              )}
            </div>
          </div>
          <div>
            {loadedGameDetails && (
              <>
                <h3 className="pt-4">Game description</h3>
                <p className="pb-3 px-5">{description}</p>
                {minimum_system_requirements && (
                  <>
                    <h3>Minimum system requirements</h3>(
                    <ul className="d-flex flex-column gap-2 list-unstyled">
                      <li>Graphics: {minimum_system_requirements.graphics}</li>
                      <li>Memory: {minimum_system_requirements.memory}</li>
                      <li>OS: {minimum_system_requirements.os}</li>
                      <li>
                        Processor: {minimum_system_requirements.processor}
                      </li>
                      <li>Storage: {minimum_system_requirements.storage}</li>
                    </ul>
                  </>
                )}
                <a className="text-decoration-none" href={game_url}>
                  Official page
                </a>
              </>
            )}
          </div>
        </div>
      </Layout>
    </>
  );
}
