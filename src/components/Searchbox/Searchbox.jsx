import React from "react";
import styles from "./Search.module.css";

function Searchbox({ handleSearch }) {
  const handleChange = (e) => {
    handleSearch(e.target.value);
  };

  return (
    <div className={styles.searchbox}>
      <input
        type="text"
        className={styles.searchbox__input}
        placeholder="Search ..."
        onChange={handleChange}
      />
      <p className={styles.searchbox__caption}>
        Search any recipe e.g. burger, pizza, sandwich
      </p>
    </div>
  );
}

export default Searchbox;
