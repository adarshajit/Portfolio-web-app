import React from "react";

import {
  OrgContainer,
  H1,
  P,
  P1,
  P2,
  BoxContainer,
  Button,
  TextContainer,
  Img,
  Img1,
} from "./OrgElements";
import CCI from "../../../../Assets/cci.png";
import FFSC from "../../../../Assets/ffsc.png";

const Organisations = () => {
  return (
    <>
      <OrgContainer>
        <H1>Organisations</H1>
        <P>I'm a proud member of these organisations in my college.</P>
        <BoxContainer>
          <Img src={CCI} />
          <TextContainer>
            <P1>Center For Cyber Innovation</P1>
            <P2>
              CCI is a software consultant service. We provide a complete
              software solutions. The team works mostly on Web development,
              mobile application development,native apps and backend
              development.
            </P2>
            <Button>Learn more</Button>
          </TextContainer>
        </BoxContainer>
        <BoxContainer>
          <Img1 src={FFSC} />
          <TextContainer>
            <P1>Fisat Free Software Cell</P1>
            <P2>
              The Free Software Cell is one of the most active student
              organisations operating in FISAT. FFSC now conducts classes in the
              Linux operating system, kernel programming and Web application
              development.
            </P2>
            <Button>Learn more</Button>
          </TextContainer>
        </BoxContainer>
      </OrgContainer>
    </>
  );
};

export default Organisations;
