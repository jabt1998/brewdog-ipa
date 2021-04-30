import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const {placeholder, updateSearchText, setClick} = props

  const input = <input type="text" placeholder="insert text here" className={styles.input} onInput={e => updateSearchText(e.target.value)}/>
  return (
    <nav className={styles.nav}>
      <h2>Brewdog</h2>
      <div className={styles.search}>
      <FontAwesomeIcon icon={faSearch} className={styles.fa} />
      {input}
      </div>
      <div>
        <label htmlFor=">4%">more than 4%</label>
        <input type="checkbox" onInput={!setClick}/>
      </div>
    </nav>
  );
};

export default Navbar;
