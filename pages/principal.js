import Head from 'next/head';
import Display from '../components/display';
import Button from '../components/button'
import styles from '../styles/Principal.module.css';

function Principal(props) {
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
            <Button type="button" id="acoes" content="Ações" largura='2' />
            <Button type="button" id="logs" content="Logs" largura='2' />
          </div>
          <div className={styles.principal}>Tela principal</div>
        </div>
      </main>
    </div>
  )
};

export default Principal;