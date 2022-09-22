import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/input'
import Button from '../components/button'
import React, { useState } from 'react';
import FormCriarUsuario from '../components/formCriarUsuario';

function Home(props) {
  const [cadastro, setCadastro] = useState(false);

  let formARenderizar

  if (!cadastro) {
    formARenderizar = (
      <form className={styles.formulario}>
        <Input label="Login" type="email" id="email" placeholder="nome@email.com" />
        <Input label="Senha" type="password" id="password" placeholder="******" />
        <Button type="submit" id="login" content="Entrar" />
        <p className={styles.texto__padrao}>Não possui cadastro?</p>
        <button className={styles.texto__link} onClick={() => {setCadastro(true)}}>Faça Aqui</button>
      </form>
    )
  } else {
    formARenderizar = (
      <div className={styles.formulario}>
        <FormCriarUsuario />
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
