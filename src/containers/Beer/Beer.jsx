import React from "react";
import styles from "./Beer.module.scss";
import BeerCard from '../../component/BeerCard';

const Beer = (props) => {

  const { beers } = props;

  const beersJSX = beers.map(beers => <BeerCard beers={beers} />)

  return (
    <div className={styles.beers}>
      {beersJSX}
    </div>
  );
};

export default Beer;
