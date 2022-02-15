import React, { createRef, useRef, useState, useEffect } from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const AboutMain = () => {
  const timeLineRef = useRef<HTMLDivElement>(null);
  const timeLineClick = () => {
    timeLineRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const aboutRef = useRef<HTMLDivElement>(null);
  const aboutClick = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const nextRef = useRef<HTMLDivElement>(null);
  const nextClick = () => {
    nextRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Body>
          <Container>
            <Component ref={aboutRef}>
              <TimeLineBox>
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
                  <NextBtn>
                    <a onClick={timeLineClick} className="button">
                      Time-line
                    </a>
                  </NextBtn>
                </Right>
                {/* <Arrow>
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
              </Arrow> */}
              </TimeLineBox>
            </Component>
            <Component ref={timeLineRef}>
              <TimeLineBox2>
                <DashedLine>
                  <div>
                    <p>2013</p>
                    <ul>
                      <li>triangle Glass Box</li>
                    </ul>
                  </div>
                  <div>
                    <p>2014</p>
                    <ul>
                      <li>Allubium_충적지</li>
                      <li>공중화장실 설계공모전 동상</li>
                      <li>마당깊은집</li>
                      <li>Energy Cube</li>
                      <li>UAUS 파빌리온 전시</li>
                    </ul>
                  </div>
                  <div>
                    <p>2015</p>
                    <ul>
                      <li>{`D3 Housing Tomorrow /Specail mention`}</li>
                      <li>IUAV Workshop</li>
                      <li>Nest of Artist</li>
                      <li>서울시 누리공간 만들기/ 장려상</li>
                      <li>사직 사회적 기업마을</li>
                      <li>차세대 문화공간 공모전/ 특선</li>
                    </ul>
                  </div>
                  <div>
                    <p>2016</p>
                    <ul>
                      <li>부자이웃 사옥 인테리어 참여</li>
                      <li>청소년 건축동아리 아키네이져 지도자</li>
                      <li>삼우 실습생</li>
                      <li>정림 실습생</li>
                      <li>SKM 실습생</li>
                    </ul>
                  </div>
                  <div>
                    <p>2017</p>
                    <ul>
                      <li>대학생_일상을 마주하다</li>
                      <li>정림 학생 건축상/ 입선</li>
                      <li>Facileum</li>
                    </ul>
                  </div>
                  <div>
                    <p>2018</p>
                  </div>
                </DashedLine>
                <PrevBtn>
                  <a onClick={aboutClick} className="button">
                    Prev
                  </a>
                </PrevBtn>
                <NextBtn>
                  <a onClick={nextClick} className="button">
                    Next
                  </a>
                </NextBtn>
              </TimeLineBox2>
            </Component>
            <Component ref={nextRef}>
              <TimeLineBox2>
                <DashedLine>
                  <div>
                    <p>2018</p>
                    <ul>
                      <li>건축설계사무소 입사</li>
                    </ul>
                  </div>
                  <div>
                    <p>2019</p>
                  </div>
                  <div>
                    <p>2020</p>
                    <ul>
                      <li>Sketchup 튜터링</li>
                      <li>웹툰 배경 제작 모델링 참여</li>
                    </ul>
                  </div>
                  <div>
                    <p>2021</p>
                    <ul>
                      <li>Sketchup 튜터링</li>
                    </ul>
                  </div>
                  <div>
                    <p>2022</p>
                    <ul>
                      <li>포트폴리오 웹사이트 제작</li>
                    </ul>
                  </div>
                  <div>
                    <p>AND</p>
                  </div>
                </DashedLine>

                <PrevBtn>
                  <a onClick={timeLineClick} className="button">
                    Prev
                  </a>
                </PrevBtn>
              </TimeLineBox2>
            </Component>
          </Container>
        </Body>
      </Wrapper>

      <Footer />
    </>
  );
};

export default AboutMain;

const Wrapper = styled.div`
  /* width: 100vw; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* border: 1px solid red; */
`;

const Body = styled.div`
  width: 1080px;
  height: 100vh;
  color: black;
  display: flex;
  position: relative;
  justify-content: center;
  overflow-y: hidden;

  padding: 65px 0px 0px 0px;
`;

const Container = styled.div`
  width: 1080px;
  height: 100%;
  display: flex;
  white-space: nowrap;
  overflow-y: hidden;
  overflow-x: scroll !important;
`;

const Component = styled.div`
  width: 100% !important;
  /* height: 100vh; */
  /* overflow-y: hidden; */
  display: flex;
  /* border: 1px solid green; */
  position: relative;
`;

const Left = styled.div`
  width: 40%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid blue; */
`;
const ProfileImg = styled.div`
  width: 270px;
  height: 270px;
  background-image: url("./images/profile.jpg");
  filter: grayscale(100%);
  background-repeat: no-repeat;
  background-position: 80% 0%;
  background-size: cover;
  margin-bottom: 90px;
`;

const Right = styled.div`
  width: 60%;
  /* width: 1080px; */
  /* border: 1px solid blue; */
  /* margin-left: 300px; */
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
const NextBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  position: absolute;
  bottom: 100px;
  right: 50px;
  cursor: pointer;
  color: #209fac;
  a {
    text-decoration: none;
    color: #616161;
  }

  .button {
    min-width: 100px;
    padding: 10px 8px;
    text-align: center;
    font-size: 15px;
    /* background: #209eac40; */
    color: #5e5e5e;
    border: 1px solid #8f8f8f;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: all 0.3s;
  }

  .button:hover {
    background: #209eac40;
    color: black;
    padding-right: 35px;
  }

  .button::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 13px;
    right: 8px;
    top: 10px;
    background: url(https://image.flaticon.com/icons/png/512/109/109617.png)
      no-repeat center/cover;
    opacity: 0;
    transition: opacity 0.5s, right 0.3s;
  }

  .button:hover::after {
    opacity: 1;
    right: 20px;
  }
`;

const TimeLineBox = styled.div`
  width: 1080px;
  /* border: 1px solid red; */
  display: flex;
`;
const TimeLineBox2 = styled.div`
  width: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DashedLine = styled.div`
  width: 90%;
  border-top: 2px dashed gray;
  display: flex;
  justify-content: space-between;
  position: relative;
  div {
    width: 10px;
    height: 10px;
    background-color: #ff6400;
    top: -5px;
    border-radius: 100%;
    position: absolute;
  }
  div > p {
    position: absolute;
    top: -20px;
    right: -12px;
  }
  div > ul {
    margin-top: 20px;
    width: 120px;
    /* border: 1px solid red; */
    font-size: 12px;
    white-space: pre-line;
  }
  div > ul > li {
    margin: 5px;
    list-style-type: circle;
  }
  div:nth-child(2) {
    left: calc(100% / 5);
  }
  div:nth-child(3) {
    left: calc((100% / 5) * 2);
  }
  div:nth-child(4) {
    left: calc((100% / 5) * 3);
  }
  div:nth-child(5) {
    left: calc((100% / 5) * 4);
  }
  div:nth-child(6) {
    right: 0;
  }
`;

const PrevBtn = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  position: absolute;
  bottom: 100px;
  left: 0px;
  cursor: pointer;
  color: #209fac;
  a {
    text-decoration: none;
    color: #616161;
  }

  .button {
    min-width: 100px;
    padding: 10px 8px;
    text-align: center;
    font-size: 15px;
    /* background: #209eac40; */
    color: #5e5e5e;
    border: 1px solid #8f8f8f;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
    transition: all 0.3s;
  }

  .button:hover {
    background: #209eac40;
    color: black;
    padding-right: 35px;
  }

  .button::after {
    content: "";
    position: absolute;
    width: 14px;
    height: 13px;
    right: 8px;
    top: 10px;
    background: url(https://image.flaticon.com/icons/png/512/109/109617.png)
      no-repeat center/cover;
    opacity: 0;
    transition: opacity 0.5s, right 0.3s;
  }

  .button:hover::after {
    opacity: 1;
    right: 20px;
  }
`;
