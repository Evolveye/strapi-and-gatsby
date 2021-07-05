import React from "react"
import Markdown from "react-markdown"
import gfm from "remark-gfm"
import rehypeRaw from "rehype-raw"

import * as classess from "../styles/page.module.scss"

import Layout from "../layouts/base.js"

export default function ArticlePage({ pageContext }) {
  return (
    <Layout>
      <h1 className={classess.articleTitle}>{pageContext.title}</h1>

      <Markdown rehypePlugins={[ rehypeRaw ]} remarkPlugins={[ [ gfm, { singleTilde:false } ] ]} children={pageContext.content} />
    </Layout>
  )
}
