import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"

import * as classess from "../styles/page.module.scss"

import Layout from "../layouts/base.js"

export default function IndexPage() {
  return (
    <Layout className={classess.homepage}>
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
    </Layout>
  )
}
