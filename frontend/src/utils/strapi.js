import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "../styles/sanitize.css"

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
 * @typedef {object} QueryResult
 * @property {object} allStrapiArticles
 * @property {Article[]} allStrapiArticles.nodes
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
  }
`

export function getStrapiArticles() {
  /** @type {QueryResult} */
  const queryResult = useStaticQuery( query )

  return queryResult.allStrapiArticles.nodes
}
