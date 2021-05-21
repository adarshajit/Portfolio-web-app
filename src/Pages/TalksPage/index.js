import React from "react";
import {
  EducationContainer,
  H1,
  EducationWrapper,
  P1,
  P2,
  H2,
  EducationCard,
  EducationInfo,
  Header,
  Num,
} from "./talksElements";
import Footer from "../../Components/Footer/Footer";

const Talks = () => {
  return (
    <>
      <EducationContainer>
        <H1>Talks / Events</H1>
        <EducationInfo>
          <EducationWrapper>
            <EducationCard>
              <Header>
                <H2>ICEFOSS</H2>
                <Num>01</Num>
              </Header>
              <P1>Bhavans Vidya Mandir, Girinagar</P1>
              <P2>February 2020 & January 2021</P2>
            </EducationCard>
            <EducationCard>
              <Header>
                <H2>Hack Life For Free</H2>
                <Num>02</Num>
              </Header>
              <P1>Federal Institute of Science and Technology (FISAT)</P1>
              <P2>August 2020</P2>
            </EducationCard>
            <EducationCard>
              <Header>
                <H2>Introduction to FOSS</H2>
                <Num>03</Num>
              </Header>
              <P1>Federal Institute of Science and Technology (FISAT)</P1>
              <P2>December 2020</P2>
            </EducationCard>
          </EducationWrapper>
        </EducationInfo>
      </EducationContainer>
      <Footer />
    </>
  );
};

export default Talks;
