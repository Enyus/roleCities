import { useEffect, useState } from 'react';

import Head from 'next/head';
import Display from '../components/Display';
import Botao from '../components/Botao';

import styles from '../styles/Principal.module.css';

function Principal(props) {
  const [loading, setLoading] = useState(true);
  const [regiao, setRegiao] = useState({
    img: '',
    nome: ''
  })

  useEffect(() => {

    const buscarRegiao = async () => {
  
      const res = await fetch("/api/buscarRegiao", {
        body: JSON.stringify({
          id: 'd130a370-d862-4616-905a-97f10d9cbdfa',
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
        nome: result.data[0].nome
      })
    }
    
    buscarRegiao();

    setLoading(false);

  }, [])


  return (
    <div className={styles.container__principal}>
      <Head>
        <title>RoleCities</title>
        <meta name="description" content="Um aplicativo Next/React/Supabase para o desenvolvimento de cidades ligadas ao RPG de mesa" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.titulo__principal}>RoleCities</h1>

        <div className={styles.ajustar__tela}>
          <p>Rotacionais teu aperalho celultar</p>
          <img src='/icons/rotatephone.png' className={styles.ajustar__icone} />
          <p>nobre aventureiro</p>
        </div>

        <div className={styles.container__secundario}>

          <Botao
            type='voltar'
            onClick={() => window.history.back()}
            hover={true}
          />

          <div className={styles.menu}>
            <Display
              id='cidade'
              titulo='Região'
              content={loading ? '' : regiao.nome}
              largura='2'
            />

            <Display id='turno' titulo='Turno' content='1' largura='1' />

            <Display id='status' titulo='Status' content='ok' largura='1' />

            <Display id='tamanho' titulo='Tamanho' content='1' largura='1' />

            <Display id='producao' titulo='Produção' content='1' largura='1' />

            <Display id='recursos' titulo='Recursos' content='1' largura='1' />

            <Botao type="button" id="acoes" content="Ações" largura='2' loading={loading} />

            <Botao type="button" id="logs" content="Logs" largura='2' loading={loading} />
          </div>

          <div
            className={styles.principal}
            style={loading ? {backgroundImage: 'none'} : {backgroundImage: `url(${regiao.img})`} }
          >
            Tela principal
          </div>

        </div>

      </main>
    </div>
  )
};

export default Principal;
