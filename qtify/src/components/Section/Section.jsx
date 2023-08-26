import React, { useState, useEffect } from "react";
import Carousel from "../Carousel/Carousel.jsx";
import Tile from "../Tile/Tile.jsx";
import styles from "./Section.module.css";

function Section({ title, dataSource, tag }) {
  const [cards, setCards] = useState([]);
  const [isShowAll, setIsShowAll] = useState(false);

  useEffect(() => {
    dataSource().then((data) => {
      setCards(data);
      //console.log(data);
    });
  }, []);

  const handleShowAll = (e) => {
    setIsShowAll((prevState) => !prevState);
  };
  return (
    <div className={styles.container}>
      <div className={styles.main__container}>
        <h3>{title}</h3>
        <div className={styles.show__all} onClick={handleShowAll}>
          {tag === "filter" ? "" : isShowAll ? "Collapse" : "Show All"}
        </div>
      </div>
      {isShowAll ? (
        <div className={styles.wrapper}>
          {cards.map((card) => {
            return (
              <Tile
                key={card.id}
                imgSrc={card.image}
                tileName={card.title}
                follows={card.follows}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <Carousel
            data={cards}
            renderComponent={(data) => (
              <Tile
                key={data.id}
                imgSrc={data.image}
                tileName={data.title}
                follows={data.follows}
              />
            )}
          />
        </div>
      )}
    </div>
  );
}

//<Carousel albumName="Top Albums" content={album1} />
//  <Carousel albumName="New Albums" content={album2} />
export default Section;
