import React from 'react'
import styled from 'styled-components'
import { keyframes } from 'styled-components'

const breatheAnimation = keyframes`
 0% { height: 100px; width: 100px; }
 30% { height: 400px; width: 400px; opacity: 1 }
 40% { height: 405px; width: 405px; opacity: 0.3; }
 100% { height: 100px; width: 100px; opacity: 0.6; }
`

const StyledSpinner = styled.div`
    img {
    margin-top: 7rem;
    max-height: 100px;
    max-width: 100px;
    display: block;
    margin: 100px auto 0 auto;
    animation-name: ${breatheAnimation};
    animation-duration: 8s;
    animation-iteration-count: infinite;
  }
`


const LoadingSpinner = () => {
  return (
    <div>
        <StyledSpinner>
         <img src="/images/spoon-and-fork.png"
            alt='resturant-icon' />
        </StyledSpinner>
    </div>
  )
}

export default LoadingSpinner