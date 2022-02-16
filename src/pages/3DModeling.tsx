import React, { useRef } from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import GlobalStyle from "../styles/GlobalStyles";
import GraphicViewer from "../components/graphicViewer/GraphicViewer";
const ThreeDModeling = () => {
  const firstRef = useRef<HTMLDivElement>(null);
  const firstRefClick = () => {
    firstRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const secondRef = useRef<HTMLDivElement>(null);
  const secondRefClick = () => {
    secondRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const thirdRef = useRef<HTMLDivElement>(null);
  const thirdRefClick = () => {
    thirdRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Body>
          <Container>
            {/* <Left>
              <Title>Apartment</Title>
              <SubTitle>Designed for traveler</SubTitle>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Thumbnail />
            </Left>
            <Right>
              <GraphicText>그래픽을 마우스로 돌려보세요!</GraphicText>
              <GraphicViewer />
            </Right> */}
            <GraphicWrapper>
              <GraphicContainer ref={firstRef}>
                <GraphicText>Title</GraphicText>

                <GraphicViewer />
              </GraphicContainer>
              {/* <GraphicContainer ref={secondRef}>
                <GraphicText>Title2</GraphicText>
                <GraphicViewer />
              </GraphicContainer>
              <GraphicContainer ref={thirdRef}>
                <GraphicText>Title3</GraphicText>
                <GraphicViewer />
              </GraphicContainer> */}
            </GraphicWrapper>
          </Container>
        </Body>
      </Wrapper>
      <Footer />
    </>
  );
};

export default ThreeDModeling;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 0 0 0;
`;

const Body = styled.div`
  width: 1080px;
  color: black;
  /* height: 100vh; */
  /* padding: 20px; */
  /* display: flex; */
  /* padding: 65px 0px 0px 0px; */
  /* border: 1px solid blue; */
  /* margin-top: 65px; */
`;

const Container = styled.div`
  /* height: 1050px; */
  display: flex;
  font-size: 100px;
  display: flex;
  padding: 20px;
  /* flex-direction: column; */
`;

const Left = styled.div`
  width: 40%;
  /* height: 100px; */
`;

const Right = styled.div`
  width: 60%;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;

const SubTitle = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const Text = styled.div`
  width: 500px;
  font-size: 18px;
  font-weight: 300;
`;

const Thumbnail = styled.div`
  width: 300px;
  height: 400px;
  background-image: url("/images/sample.png");
  background-size: cover;
  background-repeat: no-repeat;
`;

const GraphicText = styled.div`
  /* margin-top: 30px; */
  width: 80%;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 20px;
  font-weight: 500;
  color: #209fac;
  /* border: 1px solid red; */
`;

const GraphicWrapper = styled.div`
  width: 1080px;
  height: 100vh;
  display: flex;
  /* flex-direction: column; */
  overflow-y: hidden;
  justify-content: space-between;
  align-items: start;
  /* border: 1px solid blue; */
`;

const GraphicContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid red; */
  /* border: 1px solid red; */
`;
