import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import { getStrapiArticles } from "../utils/strapi.js"

import "../styles/sanitize.css"
import * as classess from "../styles/homepage.module.css"

export default function IndexPage() {
  return (
    <>
      <h1>Homepage</h1>

      <MapContainer className={`${classess.map}`} center={[ 54.3734908, 18.5476383 ]} zoom={7} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[ 51.505, -0.09 ]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>

      <article>
        {getStrapiArticles().map( ({ id, title }) => <article key={id}><h3>{title}</h3></article> )}
      </article>
    </>
  )
}
