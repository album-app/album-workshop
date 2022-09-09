require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
 pathPrefix: '/album-workshop',
 siteMetadata: {
    title: 'Album',
    subtitle: 'sharing favourite solutions across tools and domains',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/images`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
  ],
}
