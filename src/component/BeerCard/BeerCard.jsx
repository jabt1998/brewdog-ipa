import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {

  const { beers } = props
  
  return (
    <div className={styles.beercard}> 
      <h2>{beers.name}</h2>
      <div className={styles.beerInfo}>
        <img src={beers.image_url} alt=""/>
        <p>{beers.abv}%</p>
      </div>
    </div>
  );
};

export default BeerCard;
