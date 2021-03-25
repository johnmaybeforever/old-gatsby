import React, { useState } from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Navbar from "../pages/header/navbar";
const PostContainer = styled.div`
  margin: 2rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  const [navBarOpen, setNavBar] = useState(false);

  const handleNavbar = () => {
    setNavBar(!navBarOpen);
  };
  return (
    <>
      <Navbar navbarState={navBarOpen} handleNavbar={handleNavbar}></Navbar>
      <PostContainer>
        <div className="blog-post">
          <h1>{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </PostContainer>
      <footer>last updated: {frontmatter.date}</footer>
    </>
  );
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
