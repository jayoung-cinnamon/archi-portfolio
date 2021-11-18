import React from "react";
import styled from "styled-components";
import FullScreenCanvas from "../../canvas/FullScreenCanvas";
import ExampleCamera from "../../canvas/ExampleCamera";
import ExampleBox from "../../canvas/ExampleBox";
import Sample from "../../canvas/Sample";

const GraphicViewer = () => {
  return (
    <Container>
      {/* <FullScreenCanvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <ExampleCamera />
        <ExampleBox />
      </FullScreenCanvas> */}
      <Sample />
    </Container>
  );
};

export default GraphicViewer;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
