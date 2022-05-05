import React from 'react'
import { GrRefresh,  } from 'react-icons/gr';

const Search = ({newSearch, handleSearch,refreshSearch}) => {
   
  return (
    <div>
    <label htmlFor="search">
    <strong>Search Restaurants: </strong> <button className="button" onClick={refreshSearch} ><GrRefresh /></button></label> <br></br>
      <input
        type="text"
        id="search"
        placeholder="Search Restaurants"
        value={newSearch}
        onChange={handleSearch}
      
    
      />
  </div>
  )
}

export default Search