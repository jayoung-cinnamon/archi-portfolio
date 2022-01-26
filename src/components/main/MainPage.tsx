import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <Wrapper>
      <Body>
        <TextContainer>
          <MainTitle>ARCHITECTURE</MainTitle>
          <SubText>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </SubText>
        </TextContainer>
        <ImageContainer>
          <MainImage />
        </ImageContainer>
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
  &:hover {
    color: #209fac;
    transition: ease-in 0.5s;
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
