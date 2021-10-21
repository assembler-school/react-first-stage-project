import React, { useContext } from "react";
import { Link } from "react-router-dom";

import FlexDiv from "../../components/Atoms/FlexDiv/FlexDiv";
import RegularButton from "../../components/Atoms/RegularButton/RegularButton";
import PhoneImg from "../../components/Molecules/PhoneImg/PhoneImg";
import CryptoBoard from "../../components/Organisms/CryptoBoard/CryptoBoard";
import InfoBoard from "../../components/Organisms/InfoBoard/InfoBoard";
import { CryptoWebContext } from "../../context/CryptoWeb/reducer";
import withLayout from "../../HOC/withLayout";

function Home() {
  const { user } = useContext(CryptoWebContext);
  return (
    <>
      <h1>{user.username}, check your cryptowallet and take the next step</h1>
      <FlexDiv>
        <CryptoBoard />
        {/* <PhoneImg /> */}
        <InfoBoard />
      </FlexDiv>
    </>
  );
}
export default withLayout(Home);
