import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import GlobalStyle from "../styles/GlobalStyles";
import MainPage from "../components/main/MainPage";
import { Link } from "react-router-dom";
import Header2 from "../components/header/Header2";
const Main = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header2 />
        <Container>
          <MainPage />
        </Container>
      </Wrapper>
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
`;
