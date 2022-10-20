import React from "react";
import { HexGrid, Layout, Hexagon, GridGenerator } from "react-hexgrid";

import styles from "../styles/Grid.module.css";

function Grid(props) {
  const hexagons = GridGenerator.rectangle(16, 14);

  const handleClickHexagono= (event) => {
    console.log(event.target.parentNode.parentNode.id);
  }

  return (
    <>
      <HexGrid width={310} height={230} viewBox="20 0 100 100">
        <Layout
          size={{ x: 5, y: 5 }}
          spacing={1.05}
          origin={{ x: 0, y: 0 }}
          flat={false}
        >
          {hexagons.map((hex, i) => ( <Hexagon onClick={handleClickHexagono} key={i} id={`hexagono${i}`} className={styles.hexagono} q={hex.q} r={hex.r} s={hex.s} />))}
        </Layout>
      </HexGrid>
    </>
  );
}

export default Grid;
