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
              <h1>정문영</h1>
              <div>{`우리가 원하는 공간을 우리 스스로
               얼마나 잘 표현해 낼 수 있을까요?
              미처 알지 못했던 당신이 찾던 공간
              함께 찾고 그려드립니다.`}</div>
              <QuotContainer>
                <Quot>"</Quot>
                <h2>Less is More</h2>
                <Quot2>"</Quot2>
              </QuotContainer>
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
  border: 1px solid red;
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
  padding-top: 10px;
  margin-top: 10px;
`;
const ProfileImg = styled.div`
  width: 500px;
  height: 100%;
  background-image: url("./images/profile.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: contain;
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
  text-align: right;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
  align-items: center;
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
  width: 400px;
  & h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 15px;
    text-align: right;
  }

  & div {
    white-space: pre-line;
    text-align: right;
    line-height: 20px;
  }

  position: relative;
`;

const Quot = styled.div`
  font-size: 70px;
  font-weight: 800;
  /* position: absolute;
  top: 110px;
  left: -10px;
  margin-top: 0px; */
`;
const Quot2 = styled.div`
  font-size: 70px;
  font-weight: 800;
  /* position: absolute;
  top: 110px;
  right: -30px;
  margin-top: 0px; */
`;

const QuotContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;

  justify-content: space-between;
  align-items: center;
  & h2 {
    font-size: 40px;
  }
`;
