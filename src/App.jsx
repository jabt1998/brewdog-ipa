import logo from './logo.svg';
import styles from './App.module.scss';
import Beers from './containers/Beer';
import Navbar from './component/Navbar';
import { useEffect, useState } from 'react';
import BeerCard from './component/BeerCard';

function App() {

  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState("");
  const [click, setClick] = useState(false)
  const [abvClicked, setAbvClicked] = useState(false)

  
const getMeSomeBeers = () => {

  let url = "https://api.punkapi.com/v2/beers"
  
  if(search.length > 0 || abvClicked) {
    url += '?'
  } if (search.length > 0) {
    url +=`beer_name=${search}&`
  } if (abvClicked) {
    url += 'abv_gt=5&'
  }
  
  
  

  fetch(url)
   .then(response => response.json())
    .then((jsonResponse) => {setBeers(jsonResponse)})
}

useEffect(()=> {
  
    getMeSomeBeers()
}, [beers]);  


  return (
    <>
      <Navbar updateSearchText={setSearch} setClick={setClick} setAbvClicked={setAbvClicked} abvClicked={abvClicked}/>  
      <section className={styles.beercards}>            
        <Beers beers={beers} />    
      </section>
    </>
      
  );
      }

      
export default App;
