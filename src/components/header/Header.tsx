import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Burger from "./Burger";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Body>
          <Burger />
          <Link to="/">
            <Title>Jeong Moon-young</Title>
          </Link>
          {/* <MenuContainer>
          <Link to="/about">
            <Menu>About</Menu>
          </Link>
          <Link to="/graphics">
            <Menu>3DModeling</Menu>
          </Link>
          <Link to="/works">
            <Menu>Project</Menu>
          </Link>
          <Link to="/awards">
            <Menu>Awards</Menu>
          </Link>
          <Link to="/contact">
            <Menu>Contact</Menu>
          </Link>
          <Link to="/">
            <Logo>M</Logo>
          </Link>
        </MenuContainer> */}
          <Logo>M</Logo>
        </Body>
      </Container>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 9999;
  background-color: #ffffff;
`;

const Body = styled.div`
  width: 1080px;
  display: flex;
  justify-content: space-between;
  color: black;
  padding: 20px;
  display: flex;
  /* border: 1px solid blue; */
`;
const Container = styled.div`
  display: flex;
  height: 65px;
  padding: 20px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid red;
  }
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  /* background-color: #d50404; */
  background-color: #209fac;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

const Title = styled.div`
  color: #ff6400;
  font-size: 20px;
`;
