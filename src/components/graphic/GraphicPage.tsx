import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";

const GraphicPage = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Left>
            <Title>works</Title>
          </Left>
          <Right>
            <WorkList>
              <WorkComponent />
              <WorkComponent />
              <WorkComponent />
              <WorkComponent />
            </WorkList>
            <WorkList>
              <WorkComponent />
              <WorkComponent />
              <WorkComponent />
              <WorkComponent />
            </WorkList>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default GraphicPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 20px 20px 20px;
`;

const Container = styled.div`
  height: 1050px;
  display: flex;
  font-size: 100px;
  display: flex;
  flex-direction: column;
`;

const Left = styled.div`
  width: 30%;
  border: 1px solid red;
`;

const Title = styled.div`
  font-size: 90px;
  width: 600px;
`;
const Right = styled.div`
  width: 100%;
  height: 100vh;
  border: 1px solid blue;
  padding: 10px;
`;

const WorkList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid green; */
`;

const WorkComponent = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid red;
  margin: 10px;
`;
