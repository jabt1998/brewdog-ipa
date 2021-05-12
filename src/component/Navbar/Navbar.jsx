import React from "react";
import styles from "./Navbar.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Navbar = (props) => {
  const {placeholder, updateSearchText, setClick, setAbvClicked, abvClicked} = props

  const input = <input type="text" placeholder="Insert Beer here" className={styles.input} onInput={e => updateSearchText(e.target.value)}/>

  return (
    <nav className={styles.nav}>
      <h2>Brewdog</h2>
      <div className={styles.search}>
      <div className={styles.searchIcon}>
        <FontAwesomeIcon icon={faSearch} className={styles.fa} />
      </div>
      {input}
      </div>
      <div className={styles.abv}>
        <label htmlFor=">5%">abv > 5%</label>
        <input type="checkbox" onChange={() => setAbvClicked(!abvClicked)}/>
      </div>
    </nav>
  );
};

export default Navbar;
