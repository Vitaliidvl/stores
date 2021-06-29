import { useState, useEffect } from 'react';
import axios from 'axios';
import Wrapper from './Wrapper'
import Stores from './Stores';
import Store from './Store'
import Search from './Search'


function App() {
   const [allData,setAllData] = useState([]);
   const [filteredData,setFilteredData] = useState(allData); 
   


  
   const searchHandler = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = allData.filter((data) => {
    return data.title.search(value) !== -1;
    });
    setFilteredData(result);
    }
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(response => {
    console.log(response.data)
    setAllData(response.data);
    setFilteredData(response.data);
    })
    .catch(error => {
    console.log('Error getting fake data: ' + error);
    })
    }, []);
  return (
  
       <Wrapper>
             <Search onSearch={searchHandler}/>
             <Stores>
             {filteredData.map((value) => {
               return ( 
                 <Store key={value.id}
                        logo={value.thumbnailUrl}
                        title={value.title}
                        descr={value.url}
                    />
               )
             })}
              
           </Stores>
           </Wrapper>
      
  );
}

export default App;
