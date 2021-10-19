import React from "react";

import LogIn from "../../components/Organisms/LogIn/LogIn";
import SignUp from "../../components/Organisms/SignUp/SignUp";
import FlexDiv from "../../components/Atoms/FlexDiv/FlexDiv";
import LogInDiv from "../../components/Atoms/LogInDiv/LogInDiv";

import "./Auth.scss";

export default function Auth() {
  return (
    <>
      <FlexDiv>
        <LogInDiv>
          <LogIn />
        </LogInDiv>
        <LogInDiv>
          <SignUp />
        </LogInDiv>
      </FlexDiv>
    </>
  );
}
