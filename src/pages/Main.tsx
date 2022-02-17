import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import GlobalStyle from "../styles/GlobalStyles";
import MainPage from "../components/main/MainPage";
import AboutMain from "../components/about/AboutMain";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Container>
          <MainPage />
          {/* <AboutMain /> */}
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Main;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
