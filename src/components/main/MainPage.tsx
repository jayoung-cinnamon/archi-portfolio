import React, { useEffect, useRef, useState } from "react";
import { start } from "repl";
import styled from "styled-components";
import { useInterval } from "react-interval-hook";

const MainPage = () => {
  type Title = {
    title: string;
  };
  //메인텍스트
  const [title, setTitle] = useState("Wake & Remake");
  //메인텍스트 인덱스
  const [titleIndex, setTitleIndex] = useState(1);
  useEffect(() => {
    start();
    return () => {
      stop();
    };
  }, []);
  const { start, stop } = useInterval(
    () => {
      if (titleIndex < 3) {
        setTitleIndex(titleIndex + 1);
      } else {
        setTitleIndex(1);
      }
    },
    1200,
    {
      autoStart: true,
      immediate: true,
    }
  );
  useEffect(() => {
    switch (titleIndex) {
      case 1:
        setTitle("Architect");
        break;
      case 2:
        setTitle("Portfolio");
        break;
      case 3:
        setTitle("Design");
        break;
      default:
        break;
    }
  }, [titleIndex]);

  return (
    <Wrapper>
      <Body>
        <TextContainer>{title}</TextContainer>
        <ImageContainer>
          <MainImage />
        </ImageContainer>
        <AboutBtn>
          <a href="/about">About</a>
        </AboutBtn>
      </Body>
    </Wrapper>
  );
};

export default MainPage;

const Cursor = styled.div`
  .cursor {
    height: 2rem;
    width: 2px;
    margin-left: 2px;
    background: $main;
    animation: blinkTextCursor 800ms infinite;
  }

  @keyframes blinkTextCursor {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: white;
  background-image: url("/images/background.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0% 90%;
`;

const Body = styled.div`
  width: 1080px;
  color: black;
  padding: 20px;
  display: flex;
  position: relative;
`;

const MainTitle = styled.div`
  font-weight: 800;
  color: black;
  top: 0px;
  left: 100px;

  cursor: pointer;
  .typeContainer {
    position: relative;
    font-size: 1.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SubText = styled.div`
  margin-top: 30px;
  display: flex;
  font-size: 16px;
  color: grey;
  width: 500px;
  line-height: 1.8;
`;

const TiltText = styled.div`
  font-size: 50px;
  font-weight: 900;
  font-style: oblique;
  &:hover {
    color: yellow;
    cursor: pointer;
    transition: ease-in 0.5s;
  }
`;

const TextContainer = styled.div`
  width: 500px;
  height: 60px;
  position: absolute;
  top: 350px;
  left: 400px;
  border: 1px solid black;
  /* left: 500px;
  top: 350px; */
  z-index: 9999;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 48px;
  padding-top: 5px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainImage = styled.div`
  width: 100%;
  height: 100%;
  background-image: url("./images/main.png");
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  background-position: 90px 50px;
`;

const AboutBtn = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ff6400;
  z-index: 999;
  position: absolute;
  bottom: 20px;
  right: 0;
  color: #209fac;
`;
