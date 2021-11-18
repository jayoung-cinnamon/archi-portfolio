import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <MenuContainer>
        <Title>STUDIO</Title>
        <Menu>Work</Menu>
        <Link to="/3DModeling">
          <Menu>3D Modeling</Menu>
        </Link>
        <Menu>Awards</Menu>
        <Logo></Logo>
      </MenuContainer>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.aside`
  /* width: 20px; */
  /* width: 100%; */
  /* padding: 20px;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  position: sticky;
  top: 0; */
  /* height: 100vh; */
  /* border: 1px solid black;
  transform: rotate(-90deg); */
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  -webkit-writing-mode: vertical-rl;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
`;

const Logo = styled.div`
  width: 30px;
  height: 30px;
`;

const Title = styled.div`
  font-size: 18px;
  width: 100%;
`;

const MenuIcon = styled.div`
  width: 100%;
  height: 4px;
  background-color: black;
`;

const MenuContainer = styled.div`
  width: 300px;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */
`;

const Menu = styled.div`
  font-size: 15px;
`;
