import React, { useState } from 'react'

const Search = () => {
    const[search ,setSearch] = useState('')
  return (
    <div>
    <label htmlFor="search">
    <strong>Search Hotels: </strong></label> 
      <input
        type="text"
        id="search"
        placeholder="search hotel"
      
    
      />
  </div>
  )
}

export default Search