import React from 'react';

const Card = ({ name,  address, city, state, zipCode }) => {
  return (
    <div className='grid'>
    <article>
    {/* <img src="/pix/samples/23m.jpg" alt="Sample photo"> */}
    <div class="text">
      <h3> { name } </h3>
      <p> { address } </p>
      <p> { city } </p>
      <p> { state } </p>
      <p> { zipCode } </p>
      <button>{ city } { state }</button>
    </div>
    </article>
    </div>
  )
}

export default Card;