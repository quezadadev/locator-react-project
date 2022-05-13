import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

const  PopUpCardWrap = styled.div`
position: fixed;
  background: #00000050;
  width: 100%;
  // height: 100vh;
  top: 0;
  left: 0;
.box{
  position: relative;
  width: 200px;
  /* width: 100%; */
  margin: 0 auto;
  height: 200px;
  /* height: auto; */
  max-height: 25vh;
  margin-top: calc(100vh - 85vh - 20px);
  background: #fff;
  /* background: rgb(41, 5, 142); */
  border-radius: 4px;
  padding: 20px;
  /* border: 1px solid #999; */
  overflow: auto;
}
.close-icon {
  content: 'x';
  cursor: pointer;
  position: fixed;
  right: calc(15% - 30px);
  top: calc(100vh - 85vh - 33px);
  background: #ededed;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  line-height: 20px;
  text-align: center;
  border: 1px solid #999;
  font-size: 20px;
}
`;

const PopUpCard = ({
  content, 
  handleClose,  
  business_id,  
  business_name, 
  business_address, 
  business_city, 
  business_state, 
  business_postal_code
}) => {

  return (
    
      <PopUpCardWrap>
    <div className="box">

      <span className="close-icon"
     
       onClick={handleClose}>x
    
      </span>
      <Link to={`/resturants/${business_id}`} state={ {
                        name: business_name,
                        address: business_address,
                        city: business_city,
                        state: business_state,
                        zipCode: business_postal_code
                      }}>
        { content }
        </Link>             
    </div>
    </PopUpCardWrap>
  
  )
}

export default PopUpCard