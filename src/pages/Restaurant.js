import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Restaurant = () => {
  
  const navigate = useNavigate();
  function handleClick() {
    navigate('/')
  }
  const { id } = useParams();
  alert(id);
  return (
    
    <div>
      <button onClick={handleClick}> Back</button>
      Restaurant
    </div>
  )
}

export default Restaurant