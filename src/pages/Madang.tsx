import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyles";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import awards from "../data/awards";
const Madang = () => {
  const listId = 1;

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
        <Container
          src={`${process.env.PUBLIC_URL}/project/${newList[0].thumbNail}`}
        >
          <Title>{newList[0].title}</Title>
          <SubTitle>{newList[0].subTitle}</SubTitle>
          <Detail>{newList[0].detail}</Detail>
          <WorkDate>{newList[0].workDate}</WorkDate>
          <Area>{newList[0].area}</Area>
        </Container>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Madang;
interface SrcProps {
  src: string;
}

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 0px 0px 0px;
`;

const Container = styled.div<SrcProps>`
  height: 100%;
  display: flex;
  font-size: 100px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-image: url(${(props) => props.src});
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
  font-weght: 300;
  color: blue;
`;
