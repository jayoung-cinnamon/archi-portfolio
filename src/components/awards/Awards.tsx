import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import { select } from "d3";
import awards from "../../data/awards";
import { callbackify } from "util";
import { workerData } from "worker_threads";

const Awards = () => {
  // const data = Object.values(awards).filter((item) => item.length > 1);
  // console.log(data);
  // const concatData = [];
  // for (const key in data) {
  //   const test = Object.values(data[key]);
  //   // concatData.push(data[key]);
  //   console.log(`test ${test}`);

  //   concatData.push(test);
  // }

  // console.log(`concatData ${concatData}`);
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
  const [allData, setAllData] = useState(awardsTotalList);

  const [awardData, setAwardData] = useState<awardListInfo[]>();
  interface awardListInfo {
    id: number;
    title: string;
    subTitle: string;
    subImage: string;
    thumbNail: string;
    url: string;
    detail: string;
    regDate: string;
    workDate: string;
    award: string;
    area: string;
  }
  // const filterList = Object.values(awardsTotalList).map((item, index) => {
  //   console.log(item.workDate);
  // });
  // console.log(`filterList ${filterList}`);
  const filterList: any = [];
  useEffect(() => {
    setAwardData(awardsTotalList.filter((item) => item.award === "y"));
    // console.log(awardData);
    // setData(filterList);
  }, []);

  // const increaseData = () => {
  //   setData(data.map((value) => value + 5));
  // };
  // const svgRef = useRef(null);
  // useEffect(() => {
  //   const svg = select(svgRef.current); // selection 객체

  //   svg
  //     .selectAll("circle")
  //     .data(awardData)
  //     .join(
  //       (enter) => enter.append("circle"),
  //       (update) => update.attr("class", "updated"),
  //       (exit) => exit.remove()
  //     )
  //     .attr("r", (value: any) => value)
  //     .attr("cx", (value: any) => value * 2)
  //     .attr("cy", (value: any) => value * 2)
  //     .attr("stroke", "red");
  // }, []);

  // const clickAll = () => {
  //   setAllData(allData);
  //   console.log(`alldata ${allData}`);
  // };

  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <D3Container>
            {/* <svg ref={svgRef}>
              {awardData.map(el,i)=>(
                <circle r={el} key={i}>
                  {el}
                </circle>
              )}
            </svg> */}

            {/* <svg ref={svgRef}>
              <circle />
            </svg> */}
          </D3Container>
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
  flex-direction: column;
  border: 1px solid red;
`;

const D3Container = styled.div`
  width: 500px;
  height: 1000px;
  border: 1px solid blue;
`;
