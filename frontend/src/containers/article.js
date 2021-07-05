import React from "react"

import * as classess from "./article.module.css"

// export default function Article({ title, content }) {
//   return <article>

//   </article>
// }
export function ArticleEntry({ className = null, title, content }) {
  return (
    <article className={className}>
      <h3 className={classess.entryTitle}>{title}</h3>

      <div>{content}</div>
    </article>
  )
}
