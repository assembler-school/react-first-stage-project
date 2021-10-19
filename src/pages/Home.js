import React from "react";
import Layout from "../components/Layout";
import GamesList from "../components/GamesList";

export default function Home() {
  return (
    <>
      <Layout>
        <GamesList />
      </Layout>
    </>
  );
}
