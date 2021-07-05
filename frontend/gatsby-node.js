const path = require( `path` )

const templates = {
  wpPost: path.resolve( `./src/templates/article.js` ),
}


/**
 * @typedef {object} Category
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * @property {string} createdAt
 * @property {string} published_at
 * @property {string} updatedAt
 * @property {Category[]} categories
 */

/**
 * @typedef {object} QueryData
 * @property {object} allStrapiArticles
 * @property {Article[]} allStrapiArticles.nodes
 */

/**
 * @typedef {object} QueryResult
 * @property {Error[]} errors
 * @property {QueryData} data
 */


const query = `query {
  allStrapiArticles {
    nodes {
      id
      title
      content
      createdAt
      published_at
      updatedAt

      categories {
        id
        name
      }
    }
  }
}`

exports.createPages = async({ actions:{ createPage }, graphql }) => {


  //
  // Perform data
  //


  /** @type {QueryResult} */
  const queryData = await graphql( query )
  const { errors, data } = queryData

  if (errors) throw errors

  const posts = data.allStrapiArticles.nodes


  //
  // Create pages
  //


  posts.forEach( post => createPage({
    path: `/post/${post.id}`,
    component: templates.wpPost,
    context: post,
  }) )
}
