import React from "react";
import styled from "styled-components";
import { slide as Menu } from "react-burger-menu";
import burgerstyles from "./burgerstyles";

const Burger = () => {
  return (
    <Menu styles={burgerstyles} noOverlay>
      <MenuItem id="home" className="menu-item" href="/">
        Home
      </MenuItem>
      <MenuItem id="about" className="menu-item" href="/about">
        About
      </MenuItem>
      <MenuItem id="3dworks" className="menu-item" href="/graphics">
        3d works
      </MenuItem>
      <MenuItem id="project" className="menu-item" href="/works">
        Project
      </MenuItem>
      <MenuItem id="contact" className="menu-item" href="/contact">
        Contact
      </MenuItem>
    </Menu>
  );
};

export default Burger;

const MenuItem = styled.a`
  .bm-burger-bars {
    background: #373a47;
  }
`;
