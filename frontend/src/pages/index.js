import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import { getStrapiArticles } from "../utils/strapi.js"

import "../styles/sanitize.css"

export default function IndexPage() {
  return (
    <>
      <h1>Homepage</h1>

      <article>
        {getStrapiArticles().map( ({ id, title }) => <article key={id}><h3>{title}</h3></article> )}
      </article>
    </>
  )
}
