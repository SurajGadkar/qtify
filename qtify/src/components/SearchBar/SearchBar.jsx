import React from "react";
import styles from "./SearchBar.module.css";

function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <div className={styles.searchBorder}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search a song of your choice"
        />
        <button className={styles.searchButton}>search icon</button>
      </div>
    </div>
  );
}

export default SearchBar;
