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
const spans = document.getElementsByTagName("span");
for (let i = 0; i < spans.length; i++) {
  const element = spans[i];
  if (element.innerText === "DealPost") {
    element.parentElement.parentElement.parentElement.remove();
  }
}
