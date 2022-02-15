import React from "react";
import styled from "styled-components";
const Footer = () => {
  return (
    <Wrapper>
      <Body>
        <TextContainer>COPYRIGHT © 2022 ALL RIGHTS RESERVED</TextContainer>
      </Body>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  /* position: fixed; */
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 60px;
  background-color: #209fac;
  border: 1px solid gray;
`;

const Body = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1080px;
  height: 100%;
  color: black;
  display: flex;
  position: relative;
  justify-content: center;
  overflow-y: hidden;

  /* border: 1px solid red; */
  /* padding: 65px 0px 0px 0px; */
`;

const TextContainer = styled.div`
  display: flex;
  font-size: 10px;
`;
