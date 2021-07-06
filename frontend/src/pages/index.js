import React, { useState } from "react"

import * as classess from "../styles/page.module.scss"

import Map from "../containers//map.js"
import Layout from "../layouts/base.js"
import { getLocations } from "../utils/strapi"

export default function IndexPage() {
  return (
    <Layout className={classess.homepage}>
      <h1 className={classess.title}>Homepage</h1>

      <Map className={classess.map} locations={getLocations()} />
    </Layout>
  )
}
