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
  & > article {
    border: 1px solid #ccc;
    box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
  }
  & > article > img {
    margin-top: 7rem;
    max-width: 100px;
    display: block;
    margin: 100px auto 0 auto;
  }
  .text {
    padding: 0 20px 20px;
    color: red;
    text-align: center;
    margin-top: 5rem;
  }

  .text > button {
    background: red;
    border: 0;
    color: white;
    padding: 10px;
    width: 75%;
    }

    a:link { text-decoration: none; }


    a:visited { text-decoration: none; }


    a:hover { text-decoration: none; }


  a:active { text-decoration: none; } 
  
`

const StyledButton = styled.button`
  background-color: red;
  color: white;
  padding: .5rem;
  border: none;
  width: 90px;
  margin-left: 5rem;
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
            {/* <div className="img"> */}
            <img src="/images/spoon-and-fork.png"
            alt='resturant-icon' />
            {/* </div> */}
       <div class="text">
      <h3> { name } </h3>
      <p> { address } </p>
      <p> {  city }, {  state } {  zipCode } </p>
      <button>{ city }, {  state }</button>
    </div>
  </article>
  </GridCon>
 
     
      </div>
    
  )
}

export default Restaurant