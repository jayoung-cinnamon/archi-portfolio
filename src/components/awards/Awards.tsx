import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import { select } from "d3";
import awards from "../../data/awards";
import { callbackify } from "util";
import { workerData } from "worker_threads";
import AwardsData from "./AwardsData";
import AwardsData2 from "./AwardsData2";
import ParentSize from "@visx/responsive/lib/components/ParentSize";

const Awards = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          {/* <Left>
            <ParentSize>
              {({ width, height }) => (
                <AwardsData width={width} height={height} />
              )}
            </ParentSize>
          </Left> */}
          <Right>
            <ParentSize>
              {({ width, height }) => (
                <AwardsData2 width={width} height={height} />
              )}
            </ParentSize>
          </Right>
        </Container>
      </Wrapper>
    </>
  );
};

export default Awards;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 20px 20px 20px;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  font-size: 100px;
  display: flex;
  /* flex-direction: column; */
  /* border: 1px solid red; */
`;

const Left = styled.div`
  width: 50%;
  height: 750px;
  /* border: 1px solid red; */
`;
const Right = styled.div`
  width: 100%;
  height: 700px;
  /* border: 1px solid blue; */
`;
const D3Container = styled.div`
  width: 700px;
  height: 700px;
  /* border: 1px solid blue; */
  /* svg {
    border: 1px solid red;
    width: 100%;
    height: 100%;
  } */
`;

const Title = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid red;
  font-size: 13px;
  z-index: 9999;
`;
