import React from 'react'
import { Map, Marker } from "pigeon-maps"

const Maps = ({ restaurants}) => {
  return (
    
        <Map height={500} width={900}defaultCenter={[37.733795, -122.446747]} defaultZoom={8}>
          <Marker width={50} anchor={ [37.733795, -122.446747]} />
         
          
        </Map>
      )
      
}

export default Maps