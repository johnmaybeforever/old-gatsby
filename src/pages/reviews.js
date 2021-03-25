import React from "react";
import { Link, graphql } from "gatsby";
import SiteTemplate from "../templates/siteTemplate";

export default function Reviews({ data }) {
  return (
    <SiteTemplate>
      {data.allMarkdownRemark.edges
        .filter(
          ({ node }) =>
            node.frontmatter.slug !== "/referrals" &&
            node.frontmatter.slug !== "/junk"
        )
        .map(({ node }) => (
          <div key={node.id} style={{ border: "double" }}>
            <Link
              to={node.frontmatter.slug}
              css={{ "text-decoration": "none" }}
            >
              <h3>
                {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
    </SiteTemplate>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`;
