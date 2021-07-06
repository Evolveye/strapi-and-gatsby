import React, { useState } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from "react-leaflet"

function LocationOnClickSelector({ handleSelection }) {
  const [ position, setPosition ] = useState( null )

  useMapEvent( `click`, ({ latlng }) => {
    handleSelection?.( latlng )
    setPosition( latlng )
  } )

  return position && (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}

export default function Map({ className, style, selectLocation = null, center = null, locations = [] }) {
  return (
    <MapContainer className={className} style={style} center={center} zoom={7} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {
        locations.map( ({ latitude, longitude }) => (
          <Marker key={`${latitude}, ${longitude}`} position={[ latitude, longitude ]}>
            <Popup>
              lat: {latitude}<br />
              lng: {longitude}
            </Popup>
          </Marker>
        ) )
      }

      {selectLocation && <LocationOnClickSelector handleSelection={typeof selectLocation == `function` ? selectLocation : null} />}
    </MapContainer>
  )
}
