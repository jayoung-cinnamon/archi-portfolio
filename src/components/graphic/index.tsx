import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";

const index = () => {
  return <Wrapper>프로젝트 레이아웃</Wrapper>;
};

export default index;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  padding: 50px 0px 0px 0px;
  border: 1px solid blue;
`;
