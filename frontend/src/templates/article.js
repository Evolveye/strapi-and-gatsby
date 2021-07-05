import React from "react"
import Markdown from "react-markdown"

import "../styles/sanitize.css"

export default function ArticlePage({ pageContext }) {
  return (
    <main>
      <h1>{pageContext.title}</h1>
      <Markdown>{pageContext.content}</Markdown>
    </main>
  )
}
