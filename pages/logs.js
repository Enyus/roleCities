import { useContext } from "react";
import { UserContext } from "./_app";

import Head from "next/head";
import Botao from "../components/Botao";

import styles from "../styles/Principal.module.css";

function Logs(props) {
  const { user } = useContext(UserContext);

  return (
    <div className={styles.container__principal}>
      <Head>
        <title>RC - Logs</title>
        <meta
          name="description"
          content="Aqui você poderá encontrar os logs de atividade de RoleCities"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        
        <Botao
          type="voltar"
          onClick={() => window.history.back()}
          hover={true}
        />

        <p>Página de Logs</p>

      </main>
    </div>
  );
}

export default Logs;
