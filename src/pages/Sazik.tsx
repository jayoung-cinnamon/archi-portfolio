import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import awards from "../data/awards";
const Sazik = () => {
  const listId = 5;

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
          <InfoContainer>
            <InfoLeft>
              <Title>{newList[0].title}</Title>
              {/* <SubTitle>{newList[0].subTitle}</SubTitle> */}
            </InfoLeft>
            <InfoRight>
              <WorkDate>{newList[0].workDate}</WorkDate>
              <Area>{newList[0].area}</Area>
            </InfoRight>
          </InfoContainer>
          <ContentsContainer>
            <Img1
              src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
            ></Img1>
            <Text1>
              {`
                                  의정부 자원 회수 시설은 하루 200톤의 쓰레기를 처리 할 수 있는 시설로,
    2021이면 하계년수에 다다르며 주변지역이 대규모 주거단지가 형성되면서 민원이 지속적으로 제기되고 있는 시설이다.
자원회수 시설이 한계년수에 다달랐을때 시설을 이전하고 시설을 다른 용도로 리노베이션 하는 것을 상정하여 계획 하고자 하였다.`}
            </Text1>
            <Section1>
              <Img2
                src={`${process.env.PUBLIC_URL}/project/${newList[0].img02}`}
              ></Img2>
              <Text2>SITE Model</Text2>
              {/* <Img3
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img3>
              <Img4
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img4>
              <Img5
                src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
              ></Img5> */}
            </Section1>
          </ContentsContainer>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Sazik;
interface SrcProps {
  src: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding: 50px 0px 0px 0px;
  /* border: 1px solid blue; */
`;

const Container = styled.div`
  width: 1080px;
  height: 100%;
  display: flex;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  /* border: 1px solid red; */
  background-size: contain;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  margin-right: 10px;
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
  font-size: 18px;
  font-weight: 300;
`;

const Area = styled.div`
  font-size: 15px;
  font-weight: 300;
  margin-top: 3px;
  /* color: blue; */
`;

const InfoContainer = styled.div`
  width: 100%;
  height: 150px;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid grey;
  margin-bottom: 20px;
`;

const InfoLeft = styled.div`
  width: 100%;
  height: 100%;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

const InfoRight = styled.div`
  /* width: 100%; */
  /* heigth: 100%; */
  font-size: 20px;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const ContentsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid blue; */
`;

const TextContainer = styled.div`
  width: 30%;
  border: 1px solid yellow;
  font-size: 20px;
  top: 10;
  position: sticky;
`;

const Section1 = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100%;
  display: flex;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  /* border: 1px solid green; */
`;

const Img1 = styled.div<SrcProps>`
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img2 = styled.div<SrcProps>`
  width: 450px;
  height: 320px;
  /* margin-top: 20px; */
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img3 = styled.div<SrcProps>`
  margin: 5px;
  width: 100%;
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

const Text1 = styled.div`
  margin-top: 5px;
  font-size: 12px;
  width: 100%;
  white-space: pre-wrap;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.5;
`;

const Text2 = styled.div`
  font-size: 20px;
  /* width: 100%; */
  font-weight: bold;
  white-space: pre-wrap;

  line-height: 1.5;
`;
