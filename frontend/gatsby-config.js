module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `app`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-leaflet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:3000`,
        collectionTypes: [ `categories`, `articles`, `locations` ],
      },
    },
  ],
}
