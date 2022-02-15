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
      if (titleIndex < 4) {
        setTitleIndex(titleIndex + 1);
      } else {
        setTitleIndex(1);
      }
    },
    1000,
    {
      autoStart: true,
      immediate: true,
    }
  );
  useEffect(() => {
    switch (titleIndex) {
      case 1:
        setTitle("Wake & Remake");
        break;
      case 2:
        setTitle("Architect");
        break;
      case 3:
        setTitle("Portfolio");
        break;
      case 4:
        setTitle("Design");
        break;
      default:
        break;
    }
  }, [titleIndex]);

  return (
    <Wrapper>
      <Body>
        <TextContainer>
          <TiltText>
            {title}
            <Bar className={`titleIndex${titleIndex}`}></Bar>
          </TiltText>
        </TextContainer>{" "}
        <ImageContainer>
          <MainImage />
        </ImageContainer>
        <AboutBtn>
          <div>
            <a className="button" href="/about">
              About
            </a>
          </div>
        </AboutBtn>
      </Body>
    </Wrapper>
  );
};

export default MainPage;

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
`;

const TiltText = styled.div`
  width: 450px;
  font-size: 45px;
  font-weight: 900;
  font-style: oblique;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 15px;
  /* width: 0; */
  position: relative;

  /* left: 0; */
  z-index: 9999;
`;

const Bar = styled.div`
  width: 440px;
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  padding: 5px;
  top: 0;
  left: 0;
  z-index: -1;

  border: 1px solid #cfcfcf44;
  background-color: white;
  color: black;
  /* &.titleIndex1 {
    animation: fill 1s infinite;
  }
  &.titleIndex2 {
    animation: fill 1s infinite;
  }
  &.titleIndex3 {
    animation: fill 1s infinite;
  }
  &.titleIndex4 {
    animation: fill 1s infinite;
  } */

  @keyframes fill {
    100% {
      background: linear-gradient(to left, #ffffff75);
      width: 30%;
    }
    /* 80% {
      background: linear-gradient(to left, #ffffff75);
      width: 40%;
    }
    70% {
      background: linear-gradient(to left, #ffffff75);
      width: 50%;
    }
    50% {
      background: linear-gradient(to left, #ffffff75);
      width: 70%;
    }
    30% {
      background: linear-gradient(to left, #ffffff75);
      width: 90%;
    } */
    0% {
      background: linear-gradient(to left, #ffffff7e);
      width: 100%;
    }
  }
`;

const TextContainer = styled.div`
  position: absolute;
  top: 350px;
  right: 450px;
  /* border: 1px solid black; */
  z-index: 9999;
  /* background-color: white; */

  cursor: pointer;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 999;
  position: absolute;
  bottom: 40px;
  right: 200px;
  color: #209fac;
  a {
    text-decoration: none;
    color: #616161;
  }

  .button {
    min-width: 100px;
    padding: 10px 10px;
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
    width: 9px;
    height: 9px;

    right: 0px;
    top: 13px;
    /* background: url(https://image.flaticon.com/icons/png/512/109/109617.png)
      no-repeat center/cover; */
    opacity: 0;

    transform: rotate(45deg);
    border-top: 1px solid gray;
    border-right: 1px solid gray;
    transition: opacity 0.5s, right 0.3s;
  }

  .button:hover::after {
    opacity: 1;
    right: 20px;
  }
`;
