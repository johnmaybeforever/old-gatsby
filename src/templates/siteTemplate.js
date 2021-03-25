import React, { useState } from "react";
import Navbar from "../pages/header/navbar";
export default function SiteTemplate({
  children, // this prop will be injected by the GraphQL query below.
}) {
  const [navBarOpen, setNavBar] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navBarOpen);
  };
  return (
    <>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar}></Navbar>
      <br></br>
      <br></br>
      {children}
    </>
  );
}
