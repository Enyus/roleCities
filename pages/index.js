import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/input'
import Button from '../components/button'
import React, { useState } from 'react';
import FormCriarUsuario from '../components/formCriarUsuario';
import FormLogin from '../components/formLogin';

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
        <button className={styles.texto__link} onClick={() => {setCadastro(true)}}>Faça Aqui</button>
      </div>
    )
  } else {
    formARenderizar = (
      <div className={styles.formulario}>
        <FormCriarUsuario 
          parentCallback={checkCadastro}
        />
        <button className={styles.voltar} onClick={() => setCadastro(false)}>
          <img src='/voltar.png' className={styles.voltar__img}/>
        </button>
      </div>
    )
  }

  return (
    <div className={styles.container__principal}>
      <Head>
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
