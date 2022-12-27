import React, { useContext } from 'react';
import { LoadingContext } from '../pages/_app';

import { FaSpinner } from 'react-icons/fa';

import styles from '../styles/Inputs.module.css';

function Botao(props) {
  const { loading } = useContext(LoadingContext)

  let esltiloAplicadoDiv
  let esltiloAplicadoBotao

  switch (props.largura) {
    case '1':
      esltiloAplicadoDiv = styles.input__container + ' ' + styles.coluna__unica;
      esltiloAplicadoBotao = styles.button__submit + ' ' + styles.botao__largo
      break;
    case '2':
      esltiloAplicadoDiv = styles.input__container + ' ' + styles.coluna__dupla;
      esltiloAplicadoBotao = styles.button__submit + ' ' + styles.botao__largo
      break;
    default:
      esltiloAplicadoDiv = styles.input__container + ' ' + styles.input__margin;
      esltiloAplicadoBotao = styles.button__submit + ' ' + styles.botao__curto
  }


  if (loading) {
    return (
      <div className={esltiloAplicadoDiv}>
        <button type='button' className={esltiloAplicadoBotao} disabled>
          <div className={styles.iconeLoading}>
            <FaSpinner />
          </div>
        </button>
      </div>
    )
  }

  if (props.type == 'voltar') {
    return (
      <button
        className={props.hover ? styles.voltar + ' ' + styles.voltar__hover : styles.voltar}
        onClick={props.onClick}
      >

        <img
          src='/icons/voltar.png'
          className={styles.voltar__img}
        />

      </button>
    )
  }

  return (
    <div className={esltiloAplicadoDiv}>
      <button type={props.type} id={props.id} onClick={props.onClick} className={esltiloAplicadoBotao} disabled={props.disabled}>{props.content}</button>
    </div>
  )

}

export default Botao;