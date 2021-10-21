import React, { useContext } from "react";
import Layout from "../components/Layout";
import GamesList from "../components/GamesList";
import { Redirect } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function Home() {
  const {isLogged} = useContext(AuthContext);
  return (
    <>
    {!isLogged && <Redirect to="/" />}
      <Layout>
        <GamesList />
      </Layout>
    </>
  );
}
