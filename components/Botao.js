import React from 'react';

import { FaSpinner } from 'react-icons/fa';

import styles from '../styles/Inputs.module.css';

function Botao(props) {
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

  if (props.loading) {
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

  return (
    <div className={esltiloAplicadoDiv}>
      <button type={props.type} id={props.id} className={esltiloAplicadoBotao} disabled={props.disabled}>{props.content}</button>
    </div>
  )

}

export default Botao;