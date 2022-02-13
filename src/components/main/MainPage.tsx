import React from "react";
import styled from "styled-components";

const MainPage = () => {
  // var line = document.getElementById("line");
  // var txts = [
  //   "Typewriter using async/await",
  //   "Write multiple lines",
  //   "Change the txts array",
  // ];
  // var speed = 100;

  // async function typewriter(txt) {
  //   for (let i = 0; i < txt.length; i++) {
  //     line.innerHTML += txt.charAt(i);
  //     await delay(speed);
  //   }
  // }

  // async function reverseTypewriter(txt) {
  //   for (let i = txt.length; i > 0; i--) {
  //     line.innerHTML = line.innerHTML.slice(0, -1);
  //     await delay(speed);
  //   }
  // }

  // async function writeLoop() {
  //   for (let i = 0; i < txts.length; i++) {
  //     await typewriter(txts[i]);
  //     await delay(4000);
  //     await reverseTypewriter(txts[i]);
  //     await delay(1000);
  //   }

  //   writeLoop();
  // }

  // function delay(ms) {
  //   return new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, ms);
  //   });
  // }

  // writeLoop();
  return (
    <Wrapper>
      <Body>
        <TextContainer>
          <MainTitle className="typeContainer">
            <Line className="line"></Line>
            <Cursor className="cursor"></Cursor>
          </MainTitle>
          <SubText></SubText>
        </TextContainer>
        <ImageContainer>
          <MainImage />
        </ImageContainer>
      </Body>
    </Wrapper>
  );
};

export default MainPage;

const Line = styled.p`
  position: relative;
`;
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
  width: 100%;
  color: black;
  padding: 20px;
  display: flex;
`;

const MainTitle = styled.div`
  display: flex;
  font-size: 100px;
  font-weight: 800;
  color: #d50404;
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
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
`;

const ImageContainer = styled.div`
  width: 50%;
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
  background-position: 30px 80px;
`;
