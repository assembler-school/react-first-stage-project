import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import GamesList from "../components/GamesList";
import { Redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useGames } from "../context/GamesContext";

export default function Home() {
  const { isLogged } = useContext(AuthContext);
  const { resetLoadedGameDetails } = useGames();
  useEffect(() => {
    resetLoadedGameDetails();
  }, []);

  return (
    <>
      {!isLogged && <Redirect to="/" />}
      <Layout>
        <GamesList />
      </Layout>
    </>
  );
}
