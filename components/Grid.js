import React from "react";

import styles from "../styles/Grid.module.css";

function Grid(props) {

  return (
    <>
      <img src={props.regiao} alt='região' className={styles.imagem__regiao} />
      <img src='/assentamento.png' alt="cidade" className={styles.imagem__cidade} />
    </>
  );
}

export default Grid;
