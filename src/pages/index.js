import React, { useState } from "react";
import styled from "styled-components";
import Navbar from "./header/navbar";
const Container = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
// data
const links = [
  {
    text: "The real passion project",
    url: "https://www.cvscare.com/care-navigation/#/home",
    description: "My current project at CVS Health.",
  },
  {
    text: "Best online savings banks",
    url: "https://www.doctorofcredit.com/high-interest-savings-to-get/",
    description: [
      "Currently T-Mobile Money.",
      "Pros: 1.00% APY",
      "Cons: No physical branches to deposit money or talk to customer support. Only 3 free checks at signup. Limit to $3000 daily deposit (outside transfer ins such as direct deposit excluded)",
    ],
  },
  {
    text: "Credit card signup bonuses",
    url:
      "https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/",
    description: [
      "While most are travel bonuses, you can find some good cash-back ones.",
      "Note: Some bonuses count as taxable income so you may get a 1099.",
      "Note2: When downgrading a credit card to one without an annual fee, they (Chase) may still do another hard-pull on your credit.",
      "Also see bank signup bonuses.",
    ],
  },
  {
    text: "This website's navbar inspiration",
    url: "https://github.com/NunoCPNP/medium-youre-first-navbar",
    description:
      "Copied, converted to functional React style, and minor tweaks.",
  },
  {
    text: "Gatsby",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description: "How this website was built.",
  },
];

// markup
const IndexPage = () => {
  const [navBarOpen, setNavBar] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navBarOpen);
  };
  return (
    <>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar}></Navbar>
      <Container style={{ "font-family": "Sans-serif" }}>
        <title>Home Page</title>
        <h1 style={{ "text-align": "center" }}>
          Welcome to <br />
          John's (lack of) Passion Project
        </h1>
        <noscript>You need to enable JavaScript to run this app!</noscript>
        <ul>
          {links.map((link) => (
            <li
              key={link.url}
              style={{
                "list-style-type": "none",
                margin: "1rem",
                border: "1px solid black",
              }}
            >
              <span>
                <a href={`${link.url}`}>{link.text}</a>

                {Array.isArray(link.description) ? (
                  link.description.map((desc) => <p>{desc}</p>)
                ) : (
                  <p>{link.description}</p>
                )}
              </span>
            </li>
          ))}
        </ul>
        <p>
          Tired of top-ten websites where an "expert" with no hands-on
          experience gives their regurgitation of reading amazon reviews? What
          this website lacks in quantity and style, makes up for with real world
          experience and honesty. No affliate links or kickbacks. All opinions
          are my own.
        </p>
      </Container>
      <footer>last updated: March 2021</footer>
    </>
  );
};

export default IndexPage;
