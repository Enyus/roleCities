import React, { useState, useEffect } from "react";

import Botao from "./Botao";
import Display from "./Display";

import styles from "../styles/PaginaPrincipal.module.css";
import Grid from "./Grid";

function PaginaPrincipal(props) {
  const [loading, setLoading] = useState(true);
  const [regiao, setRegiao] = useState({
    img: "",
    nome: "",
  });

  useEffect(() => {
    const buscarRegiao = async () => {
      const res = await fetch("/api/buscarRegiao", {
        body: JSON.stringify({
          id: "d130a370-d862-4616-905a-97f10d9cbdfa",
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const result = await res.json();

      // console.log(result);
      // console.log(result.data[0])

      setRegiao({
        img: result.data[0].img,
        nome: result.data[0].nome,
      });
    };

    buscarRegiao();

    setLoading(false);
  }, []);

  return (
    <>
      <h1 className={styles.titulo__principal}>RoleCities</h1>

      <div className={styles.ajustar__tela}>
        <p>Rotacionais teu aperalho celular</p>
        <img src="/icons/rotatephone.png" className={styles.ajustar__icone} />
        <p>nobre aventureiro</p>
      </div>

      <div className={styles.container__secundario}>
        <div className={styles.menu}>
          <Display
            id="cidade"
            titulo="Região"
            content={loading ? "" : regiao.nome}
            largura="2"
          />

          <Display id="turno" titulo="Turno" content="1" largura="1" />

          <Display id="status" titulo="Status" content="ok" largura="1" />

          <Display id="tamanho" titulo="Tamanho" content="1" largura="1" />

          <Display id="producao" titulo="Produção" content="1" largura="1" />

          <Display id="recursos" titulo="Recursos" content="1" largura="1" />

          <Botao
            type="button"
            id="acoes"
            content="Ações"
            largura="2"
            loading={loading}
          />

          <Botao
            type="button"
            id="logs"
            content="Logs"
            largura="2"
            loading={loading}
          />
        </div>

        <div className={styles.principal}>
          <Grid regiao={regiao.img}/>
        </div>
      </div>
    </>
  );
}

export default PaginaPrincipal;
