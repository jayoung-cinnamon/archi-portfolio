import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";

const Contact = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Right>
            <RightTitle>Contact</RightTitle>
            <RightSubTitle>Have a Project?</RightSubTitle>
          </Right>
          <Left>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              voluptas vel iure ipsam exercitationem molestiae. Quasi accusamus
              dicta architecto fugiat, officiis quibusdam minima iste harum
              expedita nobis pariatur culpa optio.
            </div>
          </Left>
        </Container>
      </Wrapper>
    </>
  );
};

export default Contact;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  border: 3px solid yellow;
  padding: 50px 20px 20px 20px;
  height: 100%;
`;

const Container = styled.div`
  height: 90vh;
  font-size: 100px;
  display: flex;
  border: 1px solid red;
  width: 100%;
`;

const Right = styled.div`
  border: 1px solid blue;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const RightTitle = styled.div`
  font-size: 60px;
  font-weight: 300;
`;

const RightSubTitle = styled.div`
  font-size: 90px;
  font-weight: 500;
`;

const Left = styled.div`
  width: 70%;
  display: flex;
  border: 1px solid green;
  & > div {
    font-size: 30px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
