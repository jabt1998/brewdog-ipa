import React from "react";
import styles from "./BeerCard.module.scss";

const BeerCard = (props) => {

  const { beer } = props
  
  return (
    <div className={styles.beercard}> 
      <h2>{beer.name}</h2>
      <img src={beer.image_url} alt=""/>
      <p>{beer.abv}</p>
    </div>
  );
};

export default BeerCard;
