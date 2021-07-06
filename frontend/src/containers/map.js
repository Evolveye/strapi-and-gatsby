import React, { useState } from "react"
import RawMap from "../components/map.js"

import * as classess from "./map.module.css"


function handleLocationCreation( name, latitude, longitude ) {
  console.log({ name, latitude, longitude })

  fetch( `http://localhost:3000/locations/draft`, {
    method: `POST`,
    body: JSON.stringify({ name, latitude, longitude }),
    headers: {
      "Content-Type": `application/json`,
    },
  } ).then( res => res.json() ).then( data => {
    if (data.error) return alert( data.error )
  } )
}


export default function Map({ className, locations = [] }) {
  const [ locationName, setLocationName ] = useState( `` )
  const [ selectionMode, setSelectionMode ] = useState( false )
  const [ selectedLocation, setSelectedLocation ] = useState( null )

  return (
    <article className={`${classess.map} ${className}`}>
      <RawMap
        style={{ height:`100%`, zIndex:1 }}
        center={[ 53.3734908, 19.0476383 ]}
        selectLocation={selectionMode && setSelectedLocation}
        locations={locations}
      />

      <section className={classess.ui}>
        <label>
          Select location mode
          <input
            type="checkbox"
            checked={selectionMode}
            onChange={
              ({ target }) => {
                setSelectionMode( target.checked )
                if (!target.checked) setSelectedLocation( null )
              }
            }
          />
        </label>

        <label>
          Location name
          <input
            type="text"
            value={locationName}
            onInput={
              ({ target }) => {
                setLocationName( target.value )
              }
            }
          />
        </label>

        <button
          children="Send location proposition"
          disabled={!selectedLocation} onClick={
            () => {
              handleLocationCreation( locationName, selectedLocation.lat, selectedLocation.lng )
              setSelectedLocation( null )
              setSelectionMode( false )
              setLocationName( `` )
            }
          }
        />
      </section>
    </article>
  )
}
