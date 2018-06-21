module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sig-api-machinery`,
        path: `../sig-api-machinery`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `sig-apps`,
        path: `../sig-apps`,
      },
    },
    `gatsby-transformer-remark`,
    'gatsby-plugin-react-helmet',
  ],
}
