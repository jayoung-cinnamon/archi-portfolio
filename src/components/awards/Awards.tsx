import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import GlobalStyle from "../../styles/GlobalStyles";
import Header from "../header/Header";
import { select } from "d3";

const Awards = () => {
  const [data, setData] = useState([1, 30, 45, 70]);
  const [color, setColor] = useState(["skyblue", "blue", "lime", "darkgreen"]);
  const svgRef = useRef(null);
  useEffect(() => {
    const svg = select(svgRef.current); // selection 객체

    svg
      .selectAll("D3Container")
      .data(data)
      .join(
        (enter) => enter.append("rect"),
        (update) => update.attr("class", "updated"),
        (exit) => exit.remove()
      )
      .attr("x", (value) => value * 30)
      .attr("y", (value) => value * 30)
      .attr("width", (value) => value * 100)
      .attr("height", (value) => value * 100)
      .attr("stroke", "black")
      .attr("stroke-width", "1")
      .attr("fill", "pink")
      .attr("opacity", "1");
  }, [data]);
  return (
    <>
      <GlobalStyle />
      <Header />
      <Wrapper>
        <Container>
          <D3Container>
            <svg ref={svgRef}>
              {data.map((el, i) => (
                <rect r={el} key={i}>
                  {el}
                </rect>
              ))}
            </svg>
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
