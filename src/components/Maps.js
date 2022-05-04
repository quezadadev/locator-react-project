import React from 'react'
import { Map, Marker, Overlay,  ZoomControl } from "pigeon-maps"

const Maps = ({ restaurants }) => {
 
  return (
  <Map 
    height={500} defaultCenter={[37.733795, -122.446747]} defaultZoom={11}>
      <ZoomControl />
      <Marker width={50} anchor={[37.780133, -122.445864]} />
        {  
          restaurants.map( ({business_latitude, business_longitude }) => {
                return <Overlay 
                        anchor={[  parseFloat(business_latitude), parseFloat    (business_longitude)]} >
                          <img src='/images/icon.png' width={15} height={15} alt='' />
                      </Overlay>
          })  
            
          } 
        </Map>
      )
}

export default Maps