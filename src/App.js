import React, { useState, useEffect }  from 'react';
import Maps from './components/Maps';
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
      <Search  newSearch={newSearch} handleSearch={handleSearch} refreshSearch={refreshSearch}/>
      <div className='map-con'>
     <Maps restaurants ={restaurants}  />
     {/* {console.log(restaurants)} */}
     { restaurants
     .filter((value)=>{
        if(newSearch ===''){
          return value;
        }else{
          
            if(value.business_postal_code?.includes(newSearch)||
            value.business_name?.toLowerCase().includes(newSearch.toLowerCase())){
           
              return value;
              }
            
          }
      })
      .map( (value) => {
      //  {console.log(value.business_name)}
      return (
        <div >
          <p>{value.business_name}</p>
          <p>{value.business_postal_code}</p>
        </div>
      
      )
     })
  
     }
     </div>
    </div>
  );
}

export default App;
