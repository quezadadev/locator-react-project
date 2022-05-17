import React, { useState, useEffect }  from 'react';
import Maps from '../components/Maps';
import Card from '../components/Card';
import Search from '../components/Search';
import axios from 'axios';
import styled from 'styled-components'

const MapContainer = styled.div`
display: grid;
  grid-template-columns: 900px 350px;
   justify-content:space-around;
   margin-top: .5rem;
  margin-left: 5rem;
 
`

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [newSearch, setNewSearch] = useState('')
   
  
    const getRestaurants = async () => {
      const url = 'https://data.sfgov.org/resource/pyih-qa8i.json'
      const restaurant  = await axios(url);
      setRestaurants(restaurant.data);
  
    };
    
    useEffect(() => {
      getRestaurants();
    }, []);
  
    const handleSearch = (e)=> {
      setNewSearch(e.target.value);
    };
  
    const refreshSearch = ()=> {
      setNewSearch('');
    };
  
    return (
      <div>
      <Search
          newSearch={newSearch} 
          handleSearch={handleSearch}
          refreshSearch={refreshSearch} 
          />
      
        <MapContainer>
          <Maps 
        restaurants ={restaurants} 
        newSearch={newSearch}  
        />
       <Card
        restaurants ={restaurants} 
        newSearch={newSearch} 
       /></MapContainer>
       
      </div>
    
    );
}

export default Home