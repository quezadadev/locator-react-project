import React from 'react'
import { MdFoodBank } from "react-icons/md";
import styled from 'styled-components'

const HeaderContainer = styled.div`
display: flex;
justify-content: center;
`

const Header = ({refreshSearch}) => {
  return (

      <HeaderContainer>
      <MdFoodBank size={'5rem'} onClick={refreshSearch}/>
      </HeaderContainer>
  )
}

export default Header