import React from 'react'
import styles from '../styles/Inputs.module.css'

function Button(props) {
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

  return (
    <div className={esltiloAplicadoDiv}>
      <button type={props.type} id={props.id} className={esltiloAplicadoBotao} disabled={props.disabled}>{props.content}</button>
    </div>
  )

}

export default Button;