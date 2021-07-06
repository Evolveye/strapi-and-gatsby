import React from "react"
import { Link } from "gatsby"
import * as classess from "../styles/layout.module.scss"

import "../styles/sanitize.css"
import "../styles/main.css"

import { ArticleEntry } from "../containers/article.js"
import { getArticles } from "../utils/strapi.js"

export default function Layout({ className = null, children }) {
  return (
    <div className={classess.wrapper}>
      <aside className={classess.articles}>
        <Link to="/">Homepage</Link>

        <h2 className={classess.title2}>Articles</h2>

        {getArticles().map( ({ id, ...rest }) => <ArticleEntry key={id} className={classess.articleEntry} id={id} {...rest} /> )}
      </aside>

      <main className={`${classess.main} ${className}`}>{children}</main>
    </div>
  )
}
