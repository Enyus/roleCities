import React, { useState } from 'react'
import styles from '../styles/Inputs.module.css'
import { validateEmail } from '../utils/validateEmail';

function Input(props) {

  const [validated, setValidated] = useState('');
  // '' para não checado;
  // '1' para checado e não ok;
  // '2' para checado e ok;

  let estiloInput

  switch (validated) {
    case '':
      estiloInput = styles.input__text;
      break;
    case '1':
      estiloInput = styles.input__text + ' ' + styles.input__errado;
      break;
    case '2':
      estiloInput = styles.input__text + ' ' + styles.input__certo;
      break;
  }

  function validateInput(event) {
    let value = event.target.value;

    switch (props.type) {
      case 'email':
        validateEmail(value) ? setValidated('2') : setValidated('1');
        break;
      default:
        setValidated('');
    }
  }

  return (
    <div className={styles.input__container}>

      <label
        className={styles.input__label}
        htmlFor={props.id}
      >
        {props.label}
      </label>

      <input
        type={props.type}
        id={props.id}
        name={props.id}
        className={estiloInput}
        placeholder={props.placeholder}
        onChange={validateInput}
      />

    </div>
  )
}

export default Input;