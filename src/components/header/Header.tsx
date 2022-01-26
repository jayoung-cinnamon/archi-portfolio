import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Title>MOON YOUNG JUNG</Title>
        </Link>
        <MenuContainer>
          <Link to="/about">
            <Menu>About</Menu>
          </Link>
          <Link to="/graphics">
            <Menu>3DModeling</Menu>
          </Link>
          <Link to="/works">
            <Menu>Work List</Menu>
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
        </MenuContainer>
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

const Container = styled.div`
  display: flex;
  height: 50px;
  padding: 20px;
  border: 1px solid grey;
  justify-content: space-between;
  align-items: center;

  box-sizing: border-box;
`;

const MenuContainer = styled.div`
  width: 600px;
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
  font-size: 15px;
`;
