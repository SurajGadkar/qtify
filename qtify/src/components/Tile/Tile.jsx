import React from "react";
import Card from "../Card/Card";
import styles from "./Tile.module.css";

function Tile({ tileName, imgSrc, follows }) {
  return (
    <div className={styles.tile}>
      <div className={styles.card}>
        <Card imgSrc={imgSrc} follows={follows} />
      </div>
      <h4 className={styles.text}>{tileName}</h4>
    </div>
  );
}

export default Tile;
