import React from 'react'
import { GrRefresh,  } from 'react-icons/gr';
import styled from 'styled-components'

const InputTag = styled.input`
border: 3px solid #32e17c;
  height: 25px;
  width: 300px;
  border-radius: 50px;
 
`

const Search = ({newSearch, handleSearch,refreshSearch}) => {
   
  return (
    <div>
    <label htmlFor="search">
    <strong>Search Restaurants: </strong> </label> 
      <InputTag
    
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