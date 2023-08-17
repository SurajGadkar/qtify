import React from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

function Card({ imgSrc, follows }) {
  const noFollow = `${follows} Follows`;
  return (
    <div>
      <div className={styles.image}>
        <img
          style={{
            height: "170px",
            width: "159px",
            borderRadius: "10px 10px 0 0 ",
          }}
          src={imgSrc}
          alt="Song Images"
          loading="lazy"
        />
      </div>
      <div className={styles.button_area}>
        <Button className={styles.btn} title={noFollow} />
      </div>
    </div>
  );
}

export default Card;
