import React from 'react'
import { GrRefresh,  } from 'react-icons/gr';

const Search = ({newSearch, handleSearch,refreshSearch}) => {
   
  return (
    <div>
    <label htmlFor="search">
    <strong>Search Restaurants: </strong> </label> 
      <input
        type="text"
        id="search"
        placeholder="Search Restaurants"
        value={newSearch}
        onChange={handleSearch}
      
    
      />
      {/* <button className="button" onClick={refreshSearch} ><GrRefresh size={'1.25rem'}/></button> */}
  </div>
  )
}

export default Search