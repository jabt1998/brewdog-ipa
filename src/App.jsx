import logo from './logo.svg';
import styles from './App.module.scss';

import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import BeerCard from './component/BeerCard';

function App() {

  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredBeers, setFilteredBeers] = useState([])
  const [click, setClick] = useState(false)

  
useEffect(() => {
  fetch("https://api.punkapi.com/v2/beers")
     .then((response) => response.json())
      .then((jsonResponse) => {setBeers(jsonResponse)});
}, [])
  
const getMeSomeBeers = () => {
  let url = "https://api.punkapi.com/v2/beers"

  abvGreaterThan = click ? url += "?abv_gt=4" : ""

  fetch(url)
   .then(response => response.json)
    .then((jsonResponse) => {setBeers(jsonResponse)})
}

useEffect(()=> {
  setFilteredBeers(
    beers.filter((beer)=> {
     return beer.name.toLowerCase().includes(search.toLocaleLowerCase())
     }
    ));  

    getMeSomeBeers()
    
  }, [search, beers]);

  


  return (
    <>
      <Navbar updateSearchText={setSearch} setClick={setClick}/>  
      <section className={StyleSheet.beercards}>       
      {
        filteredBeers.map((beer) => (
          <BeerCard beer={beer} />
        ))
      }
      </section>
    </>
      
  );
      }
export default App;
