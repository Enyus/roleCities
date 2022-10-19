import { useContext } from "react";
import { UserContext } from "./_app";

import Head from "next/head";
import Botao from "../components/Botao";
import PaginaPrincipal from "../components/PaginaPrincipal";

import styles from "../styles/Principal.module.css";

function Principal(props) {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container__principal}>
      <Head>
        <title>RoleCities</title>
        <meta
          name="description"
          content="Um aplicativo Next/React/Supabase para o desenvolvimento de cidades ligadas ao RPG de mesa"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        
        <Botao
          type="voltar"
          onClick={() => window.history.back()}
          hover={true}
        />

        { user == '' ? 'Você precisa estar logado para acessar essa página' : <PaginaPrincipal />}

      </main>
    </div>
  );
}

export default Principal;
