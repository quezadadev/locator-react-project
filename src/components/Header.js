import React from 'react'
import { MdFoodBank } from "react-icons/md";

const Header = ({refreshSearch}) => {
  return (
    <div className='header--container'>
    <MdFoodBank size={'5rem'} onClick={refreshSearch}/>
    </div>
  )
}

export default Header