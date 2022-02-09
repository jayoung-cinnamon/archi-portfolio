import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import awards from "../data/awards";
const Facilleum = () => {
  const listId = 9;
  const awards2017 = awards.y2017;
  const awards2016 = awards.y2016;
  const awards2015 = awards.y2015;
  const awards2014 = awards.y2014;
  const awards2013 = awards.y2013;

  const awardsTotalList = [
    ...awards2017,
    ...awards2016,
    ...awards2015,
    ...awards2014,
    ...awards2013,
  ];

  const newList = awardsTotalList.filter((el) => el.id === listId);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <InfoContainer
            src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
          >
            <Title>{newList[0].title}</Title>
            <SubTitle>{newList[0].subTitle}</SubTitle>
            <Detail>{newList[0].detail}</Detail>
            <WorkDate>{newList[0].workDate}</WorkDate>
            <Area>{newList[0].area}</Area>
          </InfoContainer>
          <ContentsContainer>
            <TextContainer>{newList[0].detail}</TextContainer>
            <ImgContainer>
              <Img1
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img1>
              <Img2
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img2>
              <Img3
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img3>
              <Img4
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img4>
              <Img5
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img5>
            </ImgContainer>
          </ContentsContainer>
        </Container>
      </Wrapper>
    </>
  );
};

export default Facilleum;
interface SrcProps {
  src: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 0px 0px 0px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  background-size: contain;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const Detail = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const WorkDate = styled.div`
  font-size: 20px;
  font-weight: 300;
`;

const Area = styled.div`
  font-size: 15px;
  font-weight: 300;
  color: blue;
`;

const InfoContainer = styled.div<SrcProps>`
  width: 100%;
  height: 300px;
  border: 1px solid red;
  background-image: url(${(props) => props.src});
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  border: 1px solid blue;
`;

const TextContainer = styled.div`
  width: 30%;
  border: 1px solid yellow;
  font-size: 20px;
  top: 10;
  position: sticky;
`;

const ImgContainer = styled.div`
  width: 70%;
  height: 100%;
  /* display: flex; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
`;

const Img1 = styled.div<SrcProps>`
  margin: 5px;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img2 = styled.div<SrcProps>`
  margin: 5px;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img3 = styled.div<SrcProps>`
  margin: 5px;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img4 = styled.div<SrcProps>`
  margin: 5px;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img5 = styled.div<SrcProps>`
  margin: 5px;
  width: 80%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
