import React from "react";
import styled from "styled-components";

import BurgerMenu from "./burger";
import CollapseMenu from "./collapsed";

const Navbar = (props) => {
  return (
    <>
      <NavBar>
        <FlexContainer>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/junk">Junk</a>
            <a href="/referrals">More</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseWrapper>
        <CollapseMenu
          navbarState={props.navbarState}
          handleNavbar={props.handleNavbar}
        />
      </CollapseWrapper>
    </>
  );
};

export default Navbar;

const NavBar = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
  padding: 0 2rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: center;
  height: 2rem;
  @media (max-width: 599px) {
    height: 0;
  }
`;

const NavLinks = styled.ul`
  justify-self: end;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 599px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;

const CollapseWrapper = styled.div`
  @media (min-width: 600px) {
    display: none;
  }
`;
