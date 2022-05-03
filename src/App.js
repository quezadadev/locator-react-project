import { useState, useEffect } from "react";
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
    <div className="App">
     React Locator
     { console.log(`DATA: ${restaurants}`) }
     { restaurants.map( ({ business_name }) => {
       console.log(business_name)
     })
     }
    </div>
  );
}

export default App;
