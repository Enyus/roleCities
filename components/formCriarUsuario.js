import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';

import styles from '../styles/Forms.module.css'

export default function FormCriarUsuario(props) {

    let [validated, setValidated] = useState(false);
    let [emailValidated, setEmailValidated] = useState(false);
    let [nomeValidated, setNomeValidated] = useState(false);
    let [passwordValidated, setPasswordValidated] = useState(false);
    let [confirmaPasswordValidated, setConfirmaPasswordValidated] = useState(false);

    const registerUser = async (event) => {
        event.preventDefault();

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

    return (
        <form onSubmit={registerUser} onClick={checkValidation}>
            <p
                className={styles.form__text}
            >
                Após preencher todos os campos, clique em qualquer lugar do formulário para conferir a validação.
            </p>

            <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="nome@email.com"
                parentCallback={checkEmailValidation}
            />

            <Input
                label="Nome do Personagem"
                type="text"
                id="nome"
                placeholder="Gandalf"
                parentCallback={checkNomeValidation}
            />

            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="****** (senha de 6 dígitos)"
                parentCallback={checkPasswordValidation}
            />

            <Input
                label="Confirma Senha"
                type="password"
                id="confirma-password"
                placeholder="******"
                parentCallback={checkConfirmaPasswordValidation}
            />

            <Button
                type="submit"
                id="cadastrar"
                content="Cadastrar"
                disabled={!validated}
            />
        </form >
    )
};