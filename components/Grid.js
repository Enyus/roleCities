import React from "react";

import styles from "../styles/Grid.module.css";

function Grid(props) {
  const handleClick = () => {
    props.parentCallback("teste");
  };

  let imagemMostrada;

  switch (props.mostrar) {
    case "regiao":
      imagemMostrada = (
        <div
          className={styles.imagem__regiao}
          style={{ backgroundImage: `url(${props.background})` }}
        >
          <img
            src="/assentamento.png"
            alt="cidade"
            className={styles.imagem__cidade}
            onClick={handleClick}
          />
        </div>
      );
      break;
    case "cidade":
      imagemMostrada = (
        <div
          className={styles.grid__construcoes}
          style={{ backgroundImage: `url(${props.background})` }}
        >
          <img
            src="/construcoes/central-adm.png"
            className={
              styles.contrucao__item + " " + styles.construcao__central
            }
            alt="Central Administrativa"
          />
          <img
            src="/construcoes/banco.png"
            className={styles.contrucao__item + " " + styles.construcao__banco}
            alt="Banco"
          />
          <img
            src="/construcoes/estalagem.png"
            className={
              styles.contrucao__item + " " + styles.construcao__estalagem
            }
            alt="Estalagem"
          />
          <img
            src="/construcoes/mercado.png"
            className={
              styles.contrucao__item + " " + styles.construcao__mercado
            }
            alt="Mercado"
          />
          <img
            src="/construcoes/milicia.png"
            className={
              styles.contrucao__item + " " + styles.construcao__milicia
            }
            alt="Milícia"
          />
          <img
            src="/construcoes/mina.png"
            className={styles.contrucao__item + " " + styles.construcao__mina}
            alt="Mina"
          />
          <img
            src="/construcoes/porto.png"
            className={styles.contrucao__item + " " + styles.construcao__porto}
            alt="Porto"
          />
          <img
            src="/construcoes/templo.png"
            className={styles.contrucao__item + " " + styles.construcao__templo}
            alt="Templo"
          />
          <img
            src="/construcoes/torre-mago.png"
            className={styles.contrucao__item + " " + styles.construcao__mago}
            alt="Torre do Mago"
          />
          <img
            src="/construcoes/torre-vigia.png"
            className={styles.contrucao__item + " " + styles.construcao__vigia}
            alt="Torre de Vigia"
          />
        </div>
      );
      break;
  }

  return <>{imagemMostrada}</>;
}

export default Grid;
