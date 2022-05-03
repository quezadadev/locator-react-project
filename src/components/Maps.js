import React from 'react'
import { Map, Marker } from "pigeon-maps"

const Maps = () => {
  return (
    
        <Map height={500} defaultCenter={[37.733795, -122.446747]} defaultZoom={11}>
          <Marker width={50} anchor={[37.733795, -122.446747]} />
        </Map>
      )
    
  
}

export default Maps