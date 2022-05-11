import React from 'react'
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
  
  const navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }

  return (
    
    <div>
      <button onClick={handleClick}> Back</button>
      Restaurant
    </div>
  )
}

export default Restaurant