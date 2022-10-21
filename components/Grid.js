import React from "react";

import styles from "../styles/Grid.module.css";

function Grid(props) {
  const handleClick = () => {
    props.parentCallback("teste");
  };

  let imagemMostrada;

  switch (props.mostrar) {
    case "regiao":
      imagemMostrada = <img src="/assentamento.png" alt="cidade" className={styles.imagem__cidade} onClick={handleClick} />;
      break;
    case "cidade":
      imagemMostrada = '';
      break;
  }

  return (
    <>
      <div
        className={styles.imagem__regiao}
        style={{ backgroundImage: `url(${props.background})` }}
      >
        {imagemMostrada}

      </div>
    </>
  );
}

export default Grid;
