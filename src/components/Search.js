import React from 'react'
import styled from 'styled-components'

const LabelSearch = styled.div`
display: flex;
justify-content:center;
margin-top: 2rem;
margin-bottom: 2rem;
 & > input {
  border: 3px solid black;
   height: 20px;
 width: 250px;
 border-radius: 50px;
  padding-left:15px;
   margin-bottom: 5px;
 }
 
`

const Search = ({newSearch, handleSearch,refreshSearch}) => {
   
  return (
  
     <LabelSearch>
    <label htmlFor="search">
    <strong className='label' >Search Restaurants </strong> 
    </label> 
      <input type="text"
    id="search"
    placeholder="Search Restaurants"
    value={newSearch}
    onChange={handleSearch}
  />
      {/* <img className='refresh'  onClick={refreshSearch} src='/images/refreesh.jpeg ' width={18} height={18} alt=''/><br/>  */}

   </LabelSearch>

  )
}

export default Search