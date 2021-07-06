import React from "react"
import { graphql, useStaticQuery } from "gatsby"

/**
 * @typedef {object} Category
 * @property {string} id
 * @property {string} name
 */

/**
 * @typedef {object} Article
 * @property {string} id
 * @property {string} title
 * @property {string} contentc
 * @property {string} createdAt
 * @property {string} published_at
 * @property {string} updatedAt
 * @property {Category[]} categories
 */

/**
 * @typedef {object} Location
 * @property {string} id
 * @property {string} name
 * @property {string} latitude
 * @property {string} longitude
 */

/**
 * @typedef {object} QueryResult
 * @property {object} allStrapiArticles
 * @property {Article[]} allStrapiArticles.nodes
 * @property {object} allStrapiLocations
 * @property {Location[]} allStrapiLocations.nodes
 */

const query = graphql`
  {
    allStrapiArticles {
      nodes {
        id
        title
        createdAt
        published_at
        updatedAt

        categories {
          id
          name
        }
      }
    }

    allStrapiLocations {
      nodes {
        id
        name
        latitude
        longitude
      }
    }
  }
`

export function getArticles() {
  /** @type {QueryResult} */
  const queryResult = useStaticQuery( query )

  return queryResult.allStrapiArticles.nodes
}

export function getLocations() {
  /** @type {QueryResult} */
  const queryResult = useStaticQuery( query )

  return queryResult.allStrapiLocations.nodes
}
