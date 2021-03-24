import * as React from "react"
import styled from "styled-components";
import Navbar from "./header/navbar";
const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
// data
const links = [
  {
    text: "Best online savings banks",
    url: "https://www.doctorofcredit.com/high-interest-savings-to-get/",
    description: "Currently T-Mobile Money. Pros: 1.00% APY Cons: No physical branches to deposit money or talk to customer support. Only 3 free checks at signup. Limit to $3000 daily deposit (outside transfer ins such as direct deposit excluded)"
  },
  {
    text: "Churning - how responsible adults get rewards",
    url: "https://www.doctorofcredit.com/best-current-credit-card-sign-bonuses/",
    description: "While most are travel bonuses, you can find some good cash-back ones. Note: Some bonuses count as taxable income so you may get a 1099. Note2: When downgrading a credit card to one without an annual fee, they (Chase) may still do another hard-pull on your credit."
  },
  {
    text: "Gatsby - how this website was built",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  }
]

// markup
const IndexPage = () => {
  return <>
  <Navbar></Navbar>
    <Container style={{"font-family": "Sans-serif"}}>
      <title>Home Page</title>
      <h1>
        Welcome to John's (lack of) passion project
      </h1>

      <ul >
        {links.map(link => (
          <li key={link.url} >
            <span>
              <a
                href={`${link.url}`}
              >
                {link.text}
              </a>
              <p >{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <p>
        Tired of top-ten websites where an "expert" with no hands-on experience gives their regurgitation of reading amazon reviews? What this website lacks in quantity and style, makes up for with honesty and experience. All opinions are my own.
      </p>
    </Container>
    </>
}

export default IndexPage
