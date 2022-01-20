import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";

const AboutMain = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <Left>
            <ProfileImg></ProfileImg>
            {/* <ImgRec /> */}
          </Left>
          <Right>
            <Title>
              <h1>Architect</h1> Designer
            </Title>
            <SubTitle>
              <h1>Sunt laborum </h1>
              Anim voluptate pariatur aliquip pariatur anim do eiusmod deserunt
              mollit aliquip consequat aliquip minim.
              <Quot>"</Quot>
              <h2>Ullamco duis elit ex magna.</h2>
              <Quot2>"</Quot2>
            </SubTitle>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default AboutMain;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  padding: 50px 20px 20px 20px;
  height: 100%;
`;

const Container = styled.div`
  height: 90vh;
  font-size: 100px;
  display: flex;
  width: 100%;
`;
const Left = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const ProfileImg = styled.div`
  width: 550px;
  height: 70%;
  background-image: url("./images/profile.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`;

const ImgRec = styled.div`
  width: 550px;
  height: 500px;
  position: relative;
  top: -25px;
  left: 30px;
`;

const Right = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
`;

const Title = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  & h1 {
    color: #209fac;
    margin-right: 15px;
  }
`;

const SubTitle = styled.div`
  margin-top: 15px;
  font-size: 15px;
  width: 200px;
  & h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
  }
  & h2 {
    margin-left: 30px;
    margin-top: 30px;
    font-size: 40px;
    width: 600px;
  }

  position: relative;
`;

const Quot = styled.div`
  font-size: 70px;
  font-weight: 800;
  position: absolute;
  top: 110px;
  left: -10px;
`;
const Quot2 = styled.div`
  font-size: 70px;
  font-weight: 800;
  position: absolute;
  top: 110px;
  right: -320px;
`;
