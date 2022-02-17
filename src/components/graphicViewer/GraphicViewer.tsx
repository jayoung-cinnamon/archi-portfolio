import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FullScreenCanvas from "../../canvas/FullScreenCanvas";
import ExampleCamera from "../../canvas/ExampleCamera";
import ExampleBox from "../../canvas/ExampleBox";
import Sample from "../../canvas/Sample";
import Item from "./Item";
const GraphicViewer = () => {
  interface sliderProps {
    /** 슬라이더 아이템 요소 */
    children: React.ReactNode;
    /** 커스텀 클래스 */
    className?: string;
    /** 자동재생 (속도 설정시 number 타입으로) */
    autoplay?: boolean | number;
    /** 슬라이더 속도 */
    speed?: number;
    /** 반복 여부 */
    loop?: boolean;
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      {/* <FullScreenCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ExampleCamera />
        <ExampleBox />
      </FullScreenCanvas> */}

      <Sample />

      {/* <Item /> */}
    </Container>
  );
};

export default GraphicViewer;

const Container = styled.div`
  width: 100%;
  height: 100%;
  /* border: 1px solid #5f9ea045; */
`;
