import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../Logo/Logo.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";
import FeedbackButton from "../FeedbackButton/FeedbackButton.jsx";


function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <SearchBar />
      <FeedbackButton />
    </div>
  );
}

export default Navbar;
