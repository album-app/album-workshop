const { Gitlab }  = require('@gitbeaker/node')
const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createSchemaCustomization = async ({ actions }) => {
  const { createTypes, createFieldExtension } = actions
  createFieldExtension({
    name: `snippetTitle`,
    extend() {
      return {
        resolve(source) {
          return `${source.fields.snippetTitle}`
        },
      }
    },
  })
  createFieldExtension({
    name: `snippetDescription`,
    extend() {
      return {
        resolve(source) {
          return `${source.fields.snippetDescription}`
        },
      }
    },
  })
  createFieldExtension({
    name: `snippetLink`,
    extend() {
      return {
        resolve(source) {
          return `${source.fields.snippetLink}`
        },
      }
    },
  })
  createTypes(`
    type File {
      snippetTitle: String @snippetTitle
      snippetDescription: String @snippetDescription
      snippetLink: String @snippetLink
    }`
  )
}

exports.createPages = async function ({ actions, graphql, cache }) {

  const { createNode, createNodeField, store } = actions;
  const api = new Gitlab({
      token: process.env.GITLAB_API_TOKEN,
  });
  data = await api.ProjectSnippets.all(process.env.CI_PROJECT_ID);
    for (snippet of data) {
      try {
        fileNode = await createRemoteFileNode({
          url: snippet.files[0].raw_url,
          ext: ".md",
          store,
          cache,
          createNode,
          createNodeId: id => `snippet-${snippet.id}`,
        });

        await createNodeField({
          node: fileNode,
          name: 'ProjectPhoto',
          value: 'true',
        });

        await createNodeField({
          node: fileNode,
          name: 'snippetTitle',
          value: snippet.title,
        });
        await createNodeField({
          node: fileNode,
          name: 'snippetDescription',
          value: snippet.description,
        });
        await createNodeField({
          node: fileNode,
          name: 'snippetLink',
          value: snippet.web_url,
        });
        snippet.file = fileNode
      } catch (error) {
        console.warn('error creating node', error);
      }
    }

    const result = await graphql(`
        query {
          site: site {
              siteMetadata {
                title
                subtitle
              }
            },
          snippets: allFile(filter: {ext: {eq: ".md"}}, sort: {fields: name}) {
            nodes {
              children {
                ... on MarkdownRemark {
                  html
                }
              }
              name
              snippetDescription
              snippetTitle
              snippetLink
            }
          }
       }
  `)

    slug = "snippets";
    actions.createPage({
      path: '/',
      component: require.resolve(`./src/templates/snippet_links.js`),
      context: { snippets: result.data.snippets.nodes, site: result.data.site },
    })
    result.data.snippets.nodes.forEach(snippet => {
        snippet_slug = snippet.name
        actions.createPage({
          path: snippet_slug,
          component: require.resolve(`./src/templates/snippet.js`),
          context: { snippet: snippet, site: result.data.site },
        })
    })
}