/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  flags: {
    DEV_SSR: false,
    FAST_DEV: true,
    PRESERVE_FILE_DOWNLOAD_CACHE: false
  },
  pathPrefix: "/Portfolio",
  graphqlTypegen: false,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Martin Flasar Portfolio',
        short_name: 'Portfolio',
        start_url: '/',
        background_color: '#3930DB',
        theme_color: '#3930DB',
        display: 'standalone',
        icon: 'static/prof-image.png',
        crossOrigin: 'use-credentials',
        icons: [
          {
            src: '/favicon.ico',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-webpack-bundle-analyser-v2",
      options: {
        devMode: false,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-transformer-json',
    /*
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`
        },
        fetchOptions: {}
      }
    }, */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'data',
        path: __dirname.concat('/src/data')
      }
    }
  ]
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === "develop") {
    actions.setWebpackConfig({
      devtool: false,
    });
  }
};