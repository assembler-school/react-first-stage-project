import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import FlexDiv from "../../components/Atoms/FlexDiv/FlexDiv";
import RegularButton from "../../components/Atoms/RegularButton/RegularButton";
import PhoneImg from "../../components/Molecules/PhoneImg/PhoneImg";
import CryptoBoard from "../../components/Organisms/CryptoBoard/CryptoBoard";
import InfoBoard from "../../components/Organisms/InfoBoard/InfoBoard";
import { CryptoWebContext } from "../../context/CryptoWeb/reducer";
import withLayout from "../../HOC/withLayout";

function Home() {
  const { isAuth } = useContext(CryptoWebContext);
  const local = JSON.parse(localStorage.getItem("Users"));
  const currentUser = local.find((e) => e.isCurrentUser);
  return (
    <>
      {!isAuth && <Redirect to="/" />}
      {!currentUser && <Redirect to="/" />}
      <h1>
        {currentUser.username}, check your cryptowallet and take the next step
      </h1>
      <FlexDiv>
        <CryptoBoard currentUser={currentUser} />
        <InfoBoard />
      </FlexDiv>
    </>
  );
}
export default withLayout(Home);
