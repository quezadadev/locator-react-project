import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ restaurants, newSearch }) => {
 
  return (
  <div className='grid'>
          { restaurants.map( ({
          business_id,
          business_name,
          business_address,
          business_city,
          business_state,
          business_postal_code,
          
        }) => { 
  
  if (newSearch ==='') {    
   return <Link to={`/resturants/${business_id}`} 
              state={ {
                name: business_name,
                address: business_address,
                city: business_city,
                state: business_state,
                zipCode: business_postal_code
              }}
          >
   <article>
    <div class="text">
      <h3> { business_name } </h3>
      <p> { business_address } </p>
      <p> {  business_city } </p>
      <p> {  business_state } </p>
      <p> {  business_postal_code } </p>
      <button>{ business_city } {  business_state }</button>
    </div>
  </article>
  </Link>
  }

  else{

    if(business_postal_code?.includes(newSearch)||
    business_name?.toLowerCase().includes(newSearch.toLowerCase())){ 
      return <article>
    <div class="text">
      <h3> { business_name } </h3>
      <p> { business_address } </p>
      <p> {  business_city } </p>
      <p> {  business_state } </p>
      <p> {  business_postal_code } </p>
      <button>{ business_city } {  business_state }</button>
    </div>
  </article>
    } 
  
  }

  }) 
}
  </div>
)}


export default Card;