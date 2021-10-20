import React from "react";

import FlexDiv from "../../components/Atoms/FlexDiv/FlexDiv";
import PhoneImg from "../../components/Molecules/PhoneImg/PhoneImg";
import CryptoBoard from "../../components/Organisms/CryptoBoard/CryptoBoard";
import withLayout from "../../HOC/withLayout";

function Home() {
  return (
    <FlexDiv>
      <CryptoBoard />
      <PhoneImg />
    </FlexDiv>
  );
}
export default withLayout(Home);
