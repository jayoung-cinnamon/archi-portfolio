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
              {`의정부 자원 회수 시설은 하루 200톤의 쓰레기를 처리 할 수 있는 시설로,
2021이면 하계년수에 다다르며 주변지역이 대규모 주거단지가 형성되면서 민원이 지속적으로 제기되고 있는 시설이다
자원회수 시설이 한계년수에 다달랐을때 시설을 이전하고 시설을 다른 용도로 리노베이션 하는 것을 상정하여 계획 하고자 하였다.`}
            </Text1>
            <Section1>
              <Img2
                src={`${process.env.PUBLIC_URL}/project/${newList[0].img02}`}
              ></Img2>
              <Text2>SITE Model</Text2>
            </Section1>
            <Section2>
              <ImgContainer>
                <ImgBox>
                  <ImgWrapper>
                    <Img3
                      src={`${process.env.PUBLIC_URL}/project/${newList[0].img03}`}
                    ></Img3>{" "}
                    <Img3Text>경계의 변화</Img3Text>
                  </ImgWrapper>

                  <ImgSub>
                    {`현재 장암동 일대는 주거 기능이 자리 잡고 있음에도
해당사이트의 소각장이 위치하여 여가공간, 휴게 공간이 수락산 까지 확장되지 못하였다.
해당 사이트를 주거기능을 서브하는 사이트로 기능한다.`}
                  </ImgSub>
                </ImgBox>
                <ImgBox>
                  <ImgWrapper>
                    <Img4
                      src={`${process.env.PUBLIC_URL}/project/${newList[0].img04}`}
                    ></Img4>
                    <Img3Text>보행공간의 확대</Img3Text>
                  </ImgWrapper>

                  <ImgSub>
                    {`시설에 부수된 대지를 보행자에게 환원함으로써
보행공간으로 기능을 확대시킨다.`}
                  </ImgSub>
                </ImgBox>
              </ImgContainer>
              <ImgContainer>
                <ImgBox>
                  <ImgWrapper>
                    <Img5
                      src={`${process.env.PUBLIC_URL}/project/${newList[0].img05}`}
                    ></Img5>
                    <Img3Text>접근성의 변화</Img3Text>
                  </ImgWrapper>

                  <ImgSub>
                    {`해당지역으로의 접근성은 기존에는 혐오시설이 위치하여
오히려 물리적인 거리를 유지하는 거이 좋았으나
그 용도를 바꾸기 위하여 접근성을 확대할 필요가 있다.`}
                  </ImgSub>
                </ImgBox>
                <ImgBox>
                  <ImgWrapper>
                    <Img6
                      src={`${process.env.PUBLIC_URL}/project/${newList[0].img06}`}
                    ></Img6>
                    <Img3Text>조망공간 유지</Img3Text>
                  </ImgWrapper>

                  <ImgSub>
                    {`해당 지역은 수락산이 위치해 휴식 경관으로 기능한다.
이를 유지하기 위해 해당 대지는 낮게 높이계획한다.`}
                  </ImgSub>
                </ImgBox>
              </ImgContainer>
            </Section2>
            <Section3>
              <SiteBox>
                SITE Plan
                <Img7
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img07}`}
                ></Img7>
              </SiteBox>
              <ProcessBox>
                Process
                <Img8
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img08}`}
                ></Img8>
                <h1>
                  {`1_자원회수 시설이 한계 년수에 다달랐을때 시설을 이전하고 다른 용도로 리노베이션 하는 것을 상정하여 계획하고자 하였다.
2.1_자원회수시설의 대형 설비들을 철거하고 생겨나는 대공간을 활용하여 전시공간을 계획하였다.
2.2_혐오시설에서 주민들을 위한 시설로 환원됨과 동시에 상징인 굴뚝을 주거단지와의 접근성을 높이기 위한 다리로써 활용하였다.
3_ 외부 전시 공간이자 주민들의 휴식 공원을 여러 레벨의 지하 공간으로 구성하여 기존의 산이 보이는 경관을 해치지 않고자 하였다.
4_ 각 공간들을 유기적으로 연결하여 외부 전시 공간이자, 환원된 공간으로써의 땅을 주민들이 적극적으로 이용할 수 있도록 하였다.`}
                </h1>
              </ProcessBox>
              <SectionContainer>
                <h1>Section_1</h1>
                <Img9
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img09}`}
                ></Img9>
              </SectionContainer>
              <SectionContainer>
                <h1>Section_2</h1>

                <Img10
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img10}`}
                ></Img10>
              </SectionContainer>
            </Section3>
            <Section4>
              <IsoContainer>
                <h1>Isometric Image</h1>
                <Img11
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img11}`}
                ></Img11>
                <Img12
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img12}`}
                ></Img12>
                <Img13
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img13}`}
                ></Img13>
              </IsoContainer>
              <ModelContainer>
                <Img14
                  src={`${process.env.PUBLIC_URL}/project/${newList[0].img14}`}
                ></Img14>
                <ModelBox>
                  <Img15
                    src={`${process.env.PUBLIC_URL}/project/${newList[0].img15}`}
                  ></Img15>
                  <Img16
                    src={`${process.env.PUBLIC_URL}/project/${newList[0].img16}`}
                  ></Img16>
                </ModelBox>
              </ModelContainer>
            </Section4>
          </ContentsContainer>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Facilleum;
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
  margin-bottom: 10px;
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
  /* border: 1px solid yellow; */
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
const Section2 = styled.div`
  width: 100%;
  margin-top: 20px;
  /* height: 100vh; */
  display: flex;
  /* border: 1px solid purple; */
  flex-direction: column;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  /* border: 1px solid green; */
`;
const Section3 = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100%;
  display: flex;
  /* border: 1px solid purple; */
  flex-direction: column;
  /* flex-direction: column; */
  /* align-items: center; */
  justify-content: space-between;
  overflow-y: auto;
  overflow-x: hidden;
  /* border: 1px solid green; */
`;
const Section4 = styled.div`
  width: 100%;
  margin-top: 20px;
  height: 100%;
  display: flex;
  /* border: 1px solid purple; */
  flex-direction: column;
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
  background-position: 10px -100px;
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
  /* margin: 5px; */
  width: 270px;
  /* border: 1px solid red; */
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img3Text = styled.div`
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 120px;
  /* border: 1px solid blue; */
`;
const Img4 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 270px;
  /* border: 1px solid red; */
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img5 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 270px;
  /* border: 1px solid red; */
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img6 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 270px;
  /* border: 1px solid red; */
  height: 190px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
`;
const Img7 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 800px;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
  margin-bottom: 20px;
`;
const Img8 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 280px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${(props) => props.src});
  margin-top: 20px;
`;
const Img9 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 342px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
`;
const Img10 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
`;
const Img11 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  margin-bottom: 10px;
`;
const Img12 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  /* margin-bottom: 10px; */
`;
const Img13 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  margin-bottom: 10px;
`;
const Img14 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  margin-bottom: 10px;
`;
const Img15 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 100%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  margin-bottom: 10px;
  margin-right: 10px;
`;
const Img16 = styled.div<SrcProps>`
  /* margin: 5px; */
  width: 50%;
  /* border: 1px solid red; */
  height: 500px;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${(props) => props.src});
  margin-bottom: 10px;
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

const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  padding-bottom: 10px;
  font-size: 13px;
`;

const ImgBox = styled.div`
  width: 50%;
  /* border: 1px solid red; */
`;

const ImgSub = styled.div`
  /* border: 1px solid purple; */
  white-space: pre-wrap;
  line-height: 1.6;
`;

const ImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SiteBox = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  font-size: 36px;
`;

const ProcessBox = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: column;
  font-size: 36px;
  h1 {
    font-size: 12px;
    line-height: 1.6;
    white-space: pre-wrap;
    margin-left: 200px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 36px;
  }
  padding-bottom: 20px;
  padding-top: 20px;
`;

const IsoContainer = styled.div`
  font-size: 36px;
  display: flex;
  width: 100%;
  flex-direction: column;
  h1 {
    margin-bottom: 20px;
  }
`;

const ModelContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ModelBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
