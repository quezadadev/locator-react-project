import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components'

const GridCon = styled.div`
display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  align-items: stretch;
  max-width: 500px;
  width:80%;
  height:80vh;
  margin: 0 auto;
  margin-top: 3rem;
  // overflow-y: scroll;
  & > article {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  & > article img {
    max-width: 100%;
  }
  .text {
    padding: 0 20px 20px;
  }
  .text > button {
    background: gray;
    border: 0;
    color: white;
    padding: 10px;
    width: 100%;
    } 
  
`

const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: .5rem;
  border: none;
  width: 90px;
  margin-left: 10rem;
  &:hover {
    webkit-filter: blur(.5px);
    filter: blur(.5px);
    cursor: pointer;
    border: .5px solid red;
  }
`

const Restaurant = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { name, address, city, state, zipCode } =  location.state;
  

  const handleClick = () => {
    navigate('/');
  }

  return (
    
    <div>
      <StyledButton onClick={handleClick}> Back</StyledButton>
    
        <GridCon> 
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
  </GridCon>
 
     
      </div>
    
  )
}

export default Restaurant