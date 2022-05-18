import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

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
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 500px;
  width:80%;
  height:80vh;
  margin: 0 auto;
  margin-top: 3rem;
`
const StyledArticle = styled.article`
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 0px  rgba(0,0,0,0.3);
`

const StyledImage = styled.div`
  img {
  margin-top: 7rem;
  max-width: 100px;
  display: block;
  margin: 100px auto 0 auto;
  }
`

const StyledText = styled.text`
  padding: 0 20px 20px;
  color: red;
  text-align: center;
  margin: 0 auto;
  margin-top: 5rem;
`

const StyledBtn = styled.button`
  background: red;
    border: 0;
    color: white;
    padding: 10px;
    max-height: 500px;
    text-align: center;
    width: 75%;
    display: block;
    margin: 0 auto;
    a:link { text-decoration: none; }
    a:visited { text-decoration: none; }
    a:hover { text-decoration: none; }
    a:active { text-decoration: none; } 
`

const Restaurant = () => {
  
  const navigate = useNavigate();
  const location = useLocation();
  const { name, address, city, state, zipCode } =  location.state;
  

  const handleClick = () => {
    navigate('/');
  }

  return (
    
    <>
      <StyledButton onClick={handleClick}> Back</StyledButton>
      <StyledGrid>
        <StyledArticle>
          <StyledImage>
          <img src="/images/spoon-and-fork.png"
            alt='resturant-icon' />
          </StyledImage>
          <StyledText>
            <h3> { name } </h3>
            <p> { address } </p>
            <p> {  city }, {  state } {  zipCode } </p>
          </StyledText>
          <StyledBtn> { city }, {  state } </StyledBtn>
        </StyledArticle>
      </StyledGrid>
    </>
    
  )
}

export default Restaurant;