import React, { useState, useEffect }  from 'react';
import Header from './components/Header';
import Maps from './components/Maps';
import Card from './components/Card';
import Search from './components/Search';
import axios from 'axios';

function App() {

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
    <Header className="header" /> 
    <Search
        newSearch={newSearch} 
        handleSearch={handleSearch} 
        refreshSearch={refreshSearch}
        />
    <div className="map--container">
     <Maps 
      restaurants ={restaurants} 
      newSearch={newSearch}  
      />
      { restaurants.map( ({
          business_name,
          business_address,
          business_city,
          business_state,
          business_postal_code,
          
        }) => { 
         
          return <Card 
            name={business_name}
            address={business_address}
            city={business_city} 
            state={business_state}
            zipCode={business_postal_code}
            /> 
        })
      }
    </div>
    </div>
  );
}

export default App;
