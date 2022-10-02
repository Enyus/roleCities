import { useState } from 'react';

import Head from 'next/head';
import Display from '../components/Display';
import Botao from '../components/Botao';

import styles from '../styles/Principal.module.css';

function Principal(props) {
  let [loading, setLoading] = useState(false);

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
          <img src='/rotatephone.png' />
          <p>nobre aventureiro</p>
        </div>
        <div className={styles.container__secundario}>
          <div className={styles.menu}>
            <Display id='cidade' titulo='Cidade' content='Jima Island' largura='2'/>
            <Display id='turno' titulo='Turno' content='1' largura='1'/>
            <Display id='status' titulo='Status' content='ok' largura='1'/>
            <Display id='tamanho' titulo='Tamanho' content='1' largura='1'/>
            <Display id='producao' titulo='Produção' content='1' largura='1'/>
            <Display id='recursos' titulo='Recursos' content='1' largura='1'/>
            <Botao type="button" id="acoes" content="Ações" largura='2' loading={loading} />
            <Botao type="button" id="logs" content="Logs" largura='2' loading={loading}/>
          </div>
          <div className={styles.principal}>Tela principal</div>
        </div>
      </main>
    </div>
  )
};

export default Principal;
