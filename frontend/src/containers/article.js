import React from "react"
import { Link } from "gatsby"

import * as classess from "./article.module.css"

// export default function Article({ title, content }) {
//   return <article>

//   </article>
// }
export function ArticleEntry({ className = null, id, title, content }) {
  return (
    <Link to={`/post/${id}`} className={`${classess.entry} ${className}`}>
      <h3 className={classess.entryTitle}>{title}</h3>

      <div>{content}</div>
    </Link>
  )
}
