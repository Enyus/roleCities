import React, { useState, useContext } from 'react';
import { useRouter } from 'next/router'
import { UserContext } from "../pages/_app";

import EntradaUsuario from './EntradaUsuario';
import Botao from './Botao';

import styles from '../styles/Forms.module.css'

export default function FormLogin(props) {
    const {setUser} = useContext(UserContext);
    const [validated, setValidated] = useState(false);
    const [emailValidated, setEmailValidated] = useState(false);
    const [passwordValidated, setPasswordValidated] = useState(false);
    const [databaseValidation, setDatabaseValidation] = useState({ error: '' })
    const [loading, setLoading] = useState(false)

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

        // console.log(result);
        setUser(result.data[0].personagem)
        
        if (result.error) {
            setDatabaseValidation({ error: result.error });
            return
        }
        
        setLoading(false);

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
