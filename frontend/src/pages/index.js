import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { getStrapiArticles } from "../utils/strapi.js"

import "../styles/sanitize.css"
import * as classess from "../styles/homepage.module.scss"
import { ArticleEntry } from "../containers/article.js"

export default function IndexPage() {
  return (
    <main className={classess.wrapper}>
      <article className={classess.articles}>
        <h2 className={classess.title}>Articles</h2>

        {getStrapiArticles().map( ({ id, ...rest }) => <ArticleEntry key={id} className={classess.articleEntry} id={id} {...rest} /> )}
      </article>

      <article className={classess.mapContainer}>
        <h1 className={classess.title}>Homepage</h1>

        <MapContainer className={classess.map} center={[ 53.3734908, 19.0476383 ]} zoom={7} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[ 54.3734908, 18.5476383 ]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </article>
    </main>
  )
}
