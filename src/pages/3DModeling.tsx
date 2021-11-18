import React from "react";
import styled from "styled-components";
import Header2 from "../components/header/Header2";
import GlobalStyle from "../styles/GlobalStyles";
const ThreeDModeling = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header2 />
        <Container>
          <Left>1</Left>
          <Right>2</Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default ThreeDModeling;

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

const Left = styled.div`
  width: 40%;
  height: 50%;
`;
const Right = styled.div`
  width: 60%;
  height: 50%;
`;
