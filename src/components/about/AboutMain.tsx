import React from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const AboutMain = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Body>
          <Container>
            <Left>
              <ProfileImg></ProfileImg>
            </Left>
            <Right>
              <Title>
                <h1>Architect</h1> Designer
              </Title>
              <SubTitle>
                <div>
                  <h1>정문영</h1>
                  <div>{`미처 몰랐던 우리가 원하던 공간을 찾아내고,
                  만들어 내는 건축 디자이너
                   정문영 입니다.`}</div>
                </div>
                <ProfileContainer>
                  {/* <h3>
                    {`Education 명지대학교 건축대학 건축학부 건축학 전공 2018졸업
                  Extra Work 부자이웃 사옥 인테리어 디자인 참여 Apr.2016
                  서울지역 건축대학연합 UAUS파빌리온 전시 Mar/Jun. 2014
                  Awards
                  입선/ 정립 학생 건축상 2017
                  특선/ 차세대 문화공간 공모전 2015
                  장려상 / 서울시 누리공간 만들기 2015
                  Special Mention /D3 Housing Tomorrow 2015
                  동상 / 9회 공중 화장실 설계 공모전`}
                  </h3> */}
                </ProfileContainer>
              </SubTitle>
            </Right>
            <Arrow>
              <div
                className="scroll-prompt"
                scroll-prompt=""
                ng-show="showPrompt"
              >
                <div className="scroll-prompt-arrow-container">
                  <div className="scroll-prompt-arrow">
                    <div></div>
                  </div>
                  <div className="scroll-prompt-arrow">
                    <div></div>
                  </div>
                </div>
              </div>
            </Arrow>
          </Container>
        </Body>
      </Wrapper>

      <Footer />
    </>
  );
};

export default AboutMain;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* padding: 50px 20px 20px 20px; */
  height: 100%;

  border: 1px solid red;
`;

const Body = styled.div`
  width: 1080px;
  color: black;
  /* height: 100vh; */
  /* padding: 20px; */
  /* display: flex; */
  padding: 65px 0px 0px 0px;
  /* border: 1px solid blue; */
  /* margin-top: 65px; */
`;

const Container = styled.div`
  width: 100%;
  height: 90vh;
  font-size: 100px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
  white-space: nowrap;
  overflow: hidden;
`;
const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-top: 10px;
  margin-top: 10px;
  border: 1px solid blue;
`;
const ProfileImg = styled.div`
  width: 500px;
  height: 100%;
  background-image: url("./images/profile.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-size: contain;
  top: 70px;
`;

const Right = styled.div`
  width: 50%;
  /* height: 100%; */
  display: flex;
  text-align: right;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 60px;
  align-items: center;
  border: 1px solid red;
`;

const Title = styled.div`
  display: flex;
  font-size: 50px;
  font-weight: 700;
  color: black;
  cursor: pointer;
  & h1 {
    color: #209fac;
    margin-right: 18px;
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

  & h3 {
    color: green;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`;

const Quot = styled.div`
  font-size: 70px;
  font-weight: 800;
`;
const Quot2 = styled.div`
  font-size: 70px;
  font-weight: 800;
`;

const QuotContainer = styled.div`
  width: 400px;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & h2 {
    font-size: 40px;
  }
`;

const ProfileContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled.div`
  /* border: 1px solid red; */
  width: 50px;
  height: 50px;
  right: 20px;
  position: fixed;
  .scroll-prompt {
    z-index: 998;
    /* border: 1px solid gray; */
    /* bottom: -80px; */
    right: 100px;
    width: 100px;
    height: 100px;

    .scroll-prompt-arrow-container {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -18px;
      animation-name: bounce;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
      display: flex;
    }
    .scroll-prompt-arrow {
      animation-name: opacity;
      animation-duration: 1.5s;
      animation-iteration-count: infinite;
    }
    .scroll-prompt-arrow:last-child {
      animation-direction: reverse;
      margin-bottom: 10px;
    }
    .scroll-prompt-arrow > div {
      width: 15px;
      height: 15px;
      border-right: 3px solid #8dbcc2;
      border-bottom: 3px solid #8dbcc2;
      transform: rotate(-45deg) translateX(0px);
    }
  }

  @keyframes opacity {
    0% {
      opacity: 0;
    }

    10% {
      opacity: 0.1;
    }

    20% {
      opacity: 0.2;
    }

    30% {
      opacity: 0.3;
    }

    40% {
      opacity: 0.4;
    }

    50% {
      opacity: 0.5;
    }

    60% {
      opacity: 0.6;
    }

    70% {
      opacity: 0.7;
    }

    80% {
      opacity: 0.8;
    }

    90% {
      opacity: 0.9;
    }

    100% {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateX(-30px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;

const TimeLineContainer = styled.div`
  border: 2px solid yellow;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
