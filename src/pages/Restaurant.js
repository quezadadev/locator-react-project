import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Restaurant = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { name, address, city, state, zipCode } =  location.state;
  

  const handleClick = () => {
    navigate('/');
  }

  console.log(location);
  return (
    
    <div>
      <button onClick={handleClick}> Back</button>
      Restaurant
      <div className='grid'>
      <article>
    <div class="text">
      <h3> { name } </h3>
      <p> { address } </p>
      <p> {  city } </p>
      <p> {  state } </p>
      <p> {  zipCode } </p>
      <button>{ city } {  state }</button>
    </div>
  </article>
      </div>
    </div>
  )
}

export default Restaurant