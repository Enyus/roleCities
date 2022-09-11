import Head from 'next/head';
import styles from '../styles/Principal.module.css';

function Principal (props) {
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
            <img src='/rotatephone.png'/>
            <p>nobre aventureiro</p>
          </div>
        </main>
      </div>
    )
};

export default Principal;