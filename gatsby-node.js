exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions
  
    const reviewTemplate = require.resolve(`./src/templates/reviewTemplate.js`)
  
    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
  
    // Handle errors
    if (result.errors) {
      reporter.panicOnBuild(`Error while running GraphQL query.`)
      return
    }
  
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.slug,
        component: reviewTemplate,
        context: {
          // additional data can be passed via context
          slug: node.frontmatter.slug,
        },
      })
    })
  }