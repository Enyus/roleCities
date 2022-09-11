import * as dotenv from 'dotenv';
dotenv.config()
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Input from '../components/input'
import Button from '../components/button'
import { createClient } from '@supabase/supabase-js'
import React, { useState } from 'react';

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY;

// const supabaseClient = createClient(SUPABASE_URL,SUPABASE_ANON_KEY)

// supabaseClient
//   .from('users')
//   .select('*')
//   .then((dados) => {
//     console.log(dados)
//   });

function Home(props) {
  const [cadastro, setCadastro] = useState(false);

  let formARenderizar

  if (!cadastro) {
    formARenderizar = (
      <form className={styles.formulario} method="POST">
        <Input label="Login" type="email" id="email" placeholder="nome@email.com" />
        <Input label="Senha" type="password" id="password" placeholder="******" />
        <Button type="submit" id="login" content="Entrar" />
        <p className={styles.texto__padrao}>Não possui cadastro?</p>
        <button className={styles.texto__link} onClick={() => {setCadastro(true)}}>Faça Aqui</button>
      </form>
    )
  } else {
    formARenderizar = (
      <form className={styles.formulario} method="POST">
        <Input label="E-mail" type="email" id="email" placeholder="nome@email.com" />
        <Input label="Nome do Personagem" type="text" id="nome" placeholder="Gandalf" />
        <Input label="Senha" type="password" id="password" placeholder="******" />
        <Input label="Confirma Senha" type="password" id="confirma-password" placeholder="******" />
        <Button type="submit" id="cadastrar" content="Cadastrar" />
      </form>
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
