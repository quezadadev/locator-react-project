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
                      
                      <Link to={`/resturants/${business_id}`} 
                      state={ {
                        name: business_name,
                        address: business_address,
                        city: business_city,
                        state: business_state,
                        zipCode: business_postal_code
                      }}
                  >       
                      <PopUpCard
                        content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>
         }
      
                        handleClose={togglePopup}
                      /> </Link>
                      
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
                      
                      <Link to={`/resturants/${business_id}`} 
                      state={ {
                        name: business_name,
                        address: business_address,
                        city: business_city,
                        state: business_state,
                        zipCode: business_postal_code
                      }}
                  >       
                      <PopUpCard
                        content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button onClick={ () => {
                        togglePopup(business_id)}
                        }>Test button</button>
      </>
         }
      
                        handleClose={togglePopup}
                      /> </Link>}
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