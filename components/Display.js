import React from 'react'

import styles from '../styles/Display.module.css'

function Display(props) {
    let larguraColunas = props.largura;
    let estiloLargura

    switch (larguraColunas) {
        case '1':
            estiloLargura = styles.coluna__unica;
            break;
        case '2':
            estiloLargura = styles.coluna__dupla;
            break;
    }

    return (
        <div className={styles.display__geral + ' ' + estiloLargura}>
            <label className={styles.display__titulo} htmlFor={props.id}>{props.titulo}</label>
            <p className={styles.display__conteudo} id={props.id}>{props.content}</p>
        </div>
    )
}

export default Display;
