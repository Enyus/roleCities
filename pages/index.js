import React, { useState } from 'react';

import Head from 'next/head';
import FormCriarUsuario from '../components/FormCriarUsuario';
import FormLogin from '../components/FormLogin';
import Botao from '../components/Botao';

import styles from '../styles/Home.module.css';

function Home(props) {
  const [cadastro, setCadastro] = useState(false);

  const checkCadastro = (childData) => {
    setCadastro(childData);
  }

  let formARenderizar

  if (!cadastro) {
    formARenderizar = (

      <div className={styles.formulario}>
        <FormLogin />

        <p className={styles.texto__padrao}>Não possui cadastro?</p>

        <button className={styles.texto__link} onClick={() => { setCadastro(true) }}>Faça Aqui</button>
      </div>
    )
  } else {
    formARenderizar = (
      <div className={styles.formulario}>

        <FormCriarUsuario
          parentCallback={checkCadastro}
        />

        <Botao
          type='voltar'
          onClick={() => setCadastro(false)}
        />
        
      </div>
    )
  }

  return (
    <div className={styles.container__principal}>
      <Head>
        <meta charSet='UTF-8' />
        <title>RoleCities</title>
        <meta name="description" content="Um aplicativo Next/React/Supabase para o desenvolvimento de cidades ligadas ao RPG de mesa" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.titulo__principal}>RoleCities</h1>

        {formARenderizar}
      </main>
    </div>
  )
}

export default Home;
