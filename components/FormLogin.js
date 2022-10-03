import React, { useState } from 'react';
import { useRouter } from 'next/router'

import EntradaUsuario from './EntradaUsuario';
import Botao from './Botao';

import styles from '../styles/Forms.module.css'

export default function FormLogin(props) {

    let [validated, setValidated] = useState(false);
    let [emailValidated, setEmailValidated] = useState(false);
    let [passwordValidated, setPasswordValidated] = useState(false);
    let [databaseValidation, setDatabaseValidation] = useState({ error: '' })
    let [loading, setLoading] = useState(false)

    const router = useRouter();

    const checkEmailValidation = (childData) => {
        setEmailValidated(childData);
    };

    const checkPasswordValidation = (childData) => {
        setPasswordValidated(childData);
    };

    const checkValidation = () => {
        if (emailValidated && passwordValidated) {
            setValidated(true);
        } else {
            setValidated(false);
        }
    };

    const logarUsuario = async (event) => {
        event.preventDefault();

        setLoading(true);

        const res = await fetch("/api/logarUsuario", {
            body: JSON.stringify({
                email: event.target.email.value,
                password: event.target.password.value,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const result = await res.json();

        // console.log(result)

        const email = {
            receiver: 'enyus@hotmail.com',
            subject: 'Teste do Sengrid',
            text: 'Testando essa bagaça'
        }

        try {
            await fetch("/api/mandarEmail", {
                "method": "POST",
                "headers": { "content-type": "application/json" },
                "body": JSON.stringify(email)
            })

            console.log('mensagem enviada');
        } catch (error) {
            console.log(error);
        }

        setLoading(false);

        if (result.error) {
            setDatabaseValidation({ error: result.error });
            return
        }

        router.push('/principal')
    };

    let error = databaseValidation.error;

    return (
        <form onSubmit={logarUsuario} onClick={checkValidation}>

            <p className={styles.erro}>{error}</p>

            <EntradaUsuario
                label="Login"
                type="email"
                id="email"
                placeholder="nome@email.com"
                parentCallback={checkEmailValidation}
            />

            <EntradaUsuario
                label="Senha"
                type="password"
                id="password"
                placeholder="******"
                parentCallback={checkPasswordValidation}
            />

            <Botao
                type="submit"
                id="login"
                content="Entrar"
                disabled={!validated}
                loading={loading}
            />

        </form>
    )
}
