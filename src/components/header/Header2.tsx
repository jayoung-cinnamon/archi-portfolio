import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header2 = () => {
  return (
    <Wrapper>
      {/* <Logo></Logo> */}
      <Link to="/">
        <Title>STUDIO</Title>
      </Link>
      <MenuContainer>
        <Menu>Work</Menu>
        <Link to="/graphics">
          <Menu>3D Modeling</Menu>
        </Link>
        <Menu>Awards</Menu>
        <Logo></Logo>
      </MenuContainer>
    </Wrapper>
  );
};

export default Header2;

const Wrapper = styled.div`
  height: 60px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  background-color: #fcfdf8;
  box-sizing: border-box;
`;

const MenuContainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  font-size: 15px;
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
  background-color: #d50404;
`;

const Title = styled.div`
  font-size: 15px;
  /* width: 100%; */
`;
