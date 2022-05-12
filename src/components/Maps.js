import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { Map, Marker, Overlay,  ZoomControl } from "pigeon-maps"
import PopUpCard from './PopUpCard';

const Maps = ({ restaurants, newSearch }) => {

  const [restaurantId, setRestaurantId] = useState('');

  const togglePopup = (id) => {
    setRestaurantId(id)
  }
 
  return (
  <div className='map--layout'>
  <Map
    height={500} defaultCenter={[37.733795, -122.446747]} defaultZoom={11}>
      <ZoomControl />
      <Marker width={50} anchor={[37.780133, -122.445864]} />
        { 
        
          restaurants.map( ({
            business_id,
            business_latitude,
            business_longitude,
            business_name,
            business_address,
            business_city,
            business_state,
            business_postal_code,
            

          }) => {
            
            if (newSearch ==='') {
            
            return <Overlay 
                    anchor={[
                      parseFloat(business_latitude), 
                      parseFloat(business_longitude)]} 
                      >
            <img  onClick={ () => {
                        togglePopup(business_id)}
                        } 
                        src='/images/icon.png' width={15} height={15} alt='resturant-icon' />
                   
                      { business_id === restaurantId && 
                       
                      <PopUpCard
                        content={<>
        <b>{ business_name}</b>
        <p>{ business_address}</p>
        <p>{ business_city}, {business_postal_code}</p>
      </>
         }
      
                        handleClose={togglePopup}
                        business_id={business_id}
                        business_name={business_name}
                        business_address={business_address}
                        business_city={business_city}
                        business_state={business_state}
                        business_postal_code={business_postal_code}
                      /> 
                      
                      }
                    </Overlay>
            } 
             
            else{

                if(business_postal_code?.includes(newSearch)||
                business_name?.toLowerCase().includes(newSearch.toLowerCase())){
               
                  return <Overlay 
                  anchor={[
                    parseFloat(business_latitude), 
                    parseFloat(business_longitude)]} 
                    >
          <img  onClick={ () => {
                      togglePopup(business_id)}
                      } 
                      src='/images/icon.png' width={15} height={15} alt='resturant-icon' />
                 
                    { business_id === restaurantId && 
                     
                    <PopUpCard
                      content={<>
      <b>{ business_name}</b>
      <p>{ business_address}</p>
      <p>{ business_city}, {business_postal_code}</p>
    </>
       }
    
                      handleClose={togglePopup}
                      business_id={business_id}
                      business_name={business_name}
                      business_address={business_address}
                      business_city={business_city}
                      business_state={business_state}
                      business_postal_code={business_postal_code}
                    /> 
                    
                    }
                  </Overlay>
                  }
                
              }
             
          })
            
          } 
        </Map>
        </div>
      )
}

export default Maps