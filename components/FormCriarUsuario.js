import React, { useState } from 'react';

import EntradaUsuario from './EntradaUsuario';
import Botao from './Botao';

import styles from '../styles/Forms.module.css'

export default function FormCriarUsuario(props) {

    const [validated, setValidated] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [nomeValidated, setNomeValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [confirmaPasswordValidated, setConfirmaPasswordValidated] = useState(false);
    const [databaseValidation, setDatabaseValidation] = useState({ error: '' })
    const [loading, setLoading] = useState(false)

    const registerUser = async (event) => {
        event.preventDefault();

        setLoading(true);

        const res = await fetch("/api/registrarUsuario", {
            body: JSON.stringify({
                email: event.target.email.value,
                nome: event.target.nome.value,
                password: event.target.password.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const result = await res.json();
        
        // console.log(result)
        
        setLoading(false);

        if (result.error) {
            setDatabaseValidation({ error: result.error });
            return
        }

        props.parentCallback(false);
    };

    const checkEmailValidation = (childData) => {
        setEmailValidated(childData);
    };

    const checkNomeValidation = (childData) => {
        setNomeValidated(childData);
    };

    const checkPasswordValidation = (childData) => {
        setPasswordValidated(childData);
    };

    const checkConfirmaPasswordValidation = (childData) => {
        setConfirmaPasswordValidated(childData);
    }

    const checkValidation = () => {
        if (emailValidated && nomeValidated && passwordValidated && confirmaPasswordValidated) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    };

    let error = databaseValidation.error;

    return (
        <form onSubmit={registerUser} onClick={checkValidation}>
            
            <p className={styles.erro}>{error}</p>
            
            <p
                className={styles.form__text}
            >
                Após preencher todos os campos, clique em qualquer lugar do formulário para conferir a validação.
            </p>

            <EntradaUsuario
                label="E-mail"
                type="email"
                id="email"
                placeholder="nome@email.com"
                parentCallback={checkEmailValidation}
                loading={loading}
            />

            <EntradaUsuario
                label="Nome do Personagem"
                type="text"
                id="nome"
                placeholder="Gandalf"
                parentCallback={checkNomeValidation}
            />

            <EntradaUsuario
                label="Senha"
                type="password"
                id="password"
                placeholder="****** (senha de 6 dígitos)"
                parentCallback={checkPasswordValidation}
            />

            <EntradaUsuario
                label="Confirma Senha"
                type="password"
                id="confirma-password"
                placeholder="******"
                parentCallback={checkConfirmaPasswordValidation}
            />

            <Botao
                type="submit"
                id="cadastrar"
                content="Cadastrar"
                disabled={!validated}
                loading={loading}
            />
        </form >
    )
};
