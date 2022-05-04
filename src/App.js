import React, { useState, useEffect }  from 'react';
import Maps from './components/Maps';
import Search from './components/Search';
import axios from 'axios';

function App() {

  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async () => {
    const url = 'https://data.sfgov.org/resource/pyih-qa8i.json'
    const restaurant  = await axios(url);
    setRestaurants(restaurant.data);
  };

  useEffect(() => {
    getRestaurants();
  }, []);
 
  return (
    <div>
      <Search/>
     <Maps restaurants={restaurants}/>
    
    </div>
  );
}

export default App;
