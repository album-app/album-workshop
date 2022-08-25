const fs = require("fs")

const {createFileNode} = require(`gatsby-source-filesystem/create-file-node`)
const { createRemoteFileNode } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      pages: allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___title] }) {
        nodes {
          html
          frontmatter {
            slug
            title
            description
          }
        }
      }
      site: site {
          siteMetadata {
            title
            subtitle
          }
        }
    }
  `)
  if (result.errors) {
    reporter.panic("error loading site", result.errors)
    return
  }
  const pages = result.data.pages.nodes
  pages.forEach(page => {
    const permalink = page.frontmatter.slug
    actions.createPage({
      path: permalink,
      component: require.resolve("./src/templates/snippet.js"),
      context: {
        site: result.data.site,
        snippet: page
      },
    })
  })
  actions.createPage({
      path: '/',
      component: require.resolve("./src/templates/snippet_links.js"),
      context: { snippets: pages, site: result.data.site },
  })
}