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
  const [cidade, setCidade] = useState({
    nome: "",
    tamanho: 0,
    recursos: 0,
    producao: 0,
    img: "",
  });
  const [lugarMostrado, setLugarMostrado] = useState('regiao')

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

  const buscarCidade = async () => {
    setLoading(true);

    const buscaCidade = await fetch("/api/buscarCidade", {
      body: JSON.stringify({
        id: "8b6af12d-a659-45a2-83df-887c0f71f4b7",
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await buscaCidade.json();

    setCidade({
      nome: result.data[0].nome,
      tamanho: result.data[0].tamanho,
      recursos: result.data[0].recursos,
      producao: result.data[0].producao,
      img: result.data[0].img,
    });

    setLugarMostrado('cidade');

    setLoading(false);
  };

  const handleShowCidade = (childData) => {
    buscarCidade();
  };

  const handleRetornarRegiao = (event) => {
    console.log(lugarMostrado);
    setLugarMostrado('regiao');
  }

  let tituloMostrado = "";
  let nomeMostrado = "";

  if (lugarMostrado == 'regiao') {
    tituloMostrado = "Região";
    nomeMostrado = regiao.nome;
  }
  if (lugarMostrado == 'cidade') {
    tituloMostrado = "Cidade";
    nomeMostrado = cidade.nome;
  }

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
            titulo={loading ? "" : tituloMostrado}
            content={loading ? "" : nomeMostrado}
            largura="2"
          />

          <Display id="turno" titulo="Turno" content="1" largura="1" />

          <Display id="status" titulo="Status" content="ok" largura="1" />

          {lugarMostrado == 'cidade' ? (
            <>
              <Display 
                id="tamanho" 
                titulo="Tamanho" 
                content={cidade.tamanho} 
                largura="1" 
              />

              <Display
                id="producao"
                titulo="Produção"
                content={cidade.producao}
                largura="1"
              />

              <Display
                id="recursos"
                titulo="Recursos"
                content={cidade.recursos}
                largura="1"
              />

              <Botao
                type="button"
                id="retornaregiao"
                content="Retornar"
                largura="2"
                loading={loading}
                onClick={handleRetornarRegiao}
              />

              <Botao
                type="button"
                id="acoes"
                content="Ações"
                largura="2"
                loading={loading}
              />

            </>
          ) : (
            ""
          )}

          <Botao
            type="button"
            id="logs"
            content="Logs"
            largura="2"
            loading={loading}
          />
        </div>

        <div className={styles.principal}>

          {lugarMostrado == 'regiao' ? (
            <Grid
              mostrar="regiao"
              background={regiao.img}
              parentCallback={handleShowCidade}
            />
          ) : (
            ""
          )}

          {lugarMostrado == 'cidade' ? (
            <Grid
              mostrar="cidade"
              background={cidade.img}
              parentCallback={handleShowCidade}
            />
          ) : (
            ""
          )}

        </div>
      </div>
    </>
  );
}

export default PaginaPrincipal;
