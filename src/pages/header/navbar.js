import React from 'react'
import styled from "styled-components";

import BurgerMenu from "./burger";
import CollapseMenu from "./collapsed";

const Navbar = (props) => {

  return (
    <>
      <NavBar >
        <FlexContainer>
          <NavLinks>
            <a href="/">Home</a>
            <a href="/reviews">Review Sites</a>

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
      <CollapseMenu 
        navbarState={props.navbarState} 
        handleNavbar={props.handleNavbar}
      />
   </>
  )
}

export default Navbar

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
  justify-content: space-between;
  height: 2rem;
`;

const NavLinks = styled.ul`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;
  
  & a {
    color: #dfe6e9;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;
 
const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;