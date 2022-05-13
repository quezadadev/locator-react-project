import React from 'react'
import { Link } from 'react-router-dom';

const PopUpCard = ({
  content, 
  handleClose,  
  business_id,  
  business_name, 
  business_address, 
  business_city, 
  business_state, 
  business_postal_code
}) => {

  return (
    <div className="popup-box">
    <div className="box">
      <span className="close-icon" onClick={handleClose}>x</span>
      <Link to={`/resturants/${business_id}`} state={ {
                        name: business_name,
                        address: business_address,
                        city: business_city,
                        state: business_state,
                        zipCode: business_postal_code
                      }}>
        { content }
        </Link>             
    </div>
  </div>
  )
}

export default PopUpCard