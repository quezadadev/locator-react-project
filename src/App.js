import React, { useState, useEffect }  from 'react';
import Header from './components/Header';
import Maps from './components/Maps';
import Card from './components/Card';
import Search from './components/Search';
import axios from 'axios';
import PopUpCard from './components/PopUpCard';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [newSearch, setNewSearch] = useState('')
  const [isOpen, setIsOpen] = useState(false);
 

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

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
    <div>
    <input
      type="button"
      value="Click to Open Popup"
      onClick={togglePopup}
    />
    {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> */}
    {isOpen && <PopUpCard
      content={<>
        <b>Design your Popup</b>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <button>Test button</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
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
