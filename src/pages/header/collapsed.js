import React from "react";
import styled from "styled-components";

const CollapseMenu = (props) => {
  if (props.navbarState === true) {
    return (
      <CollapseWrapper>
        <NavLinks>
          <a onClick={props.handleNavbar} href="/">
            Home
          </a>
          <a onClick={props.handleNavbar} href="/junk">
            Links
          </a>
          <a onClick={props.handleNavbar} href="/referrals">
            Niche stuff
          </a>
          <a onClick={props.handleNavbar} href="/reviews">
            Reviews
          </a>
        </NavLinks>
      </CollapseWrapper>
    );
  }
  return null;
};

export default CollapseMenu;

const CollapseWrapper = styled.div`
  background: #2d3436;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
`;

const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  text-align: center;
  padding: 2rem 1rem 2rem 2rem;
  & a {
    font-size: 1.4rem;
    line-height: 2;
    color: #dfe6e9;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;
