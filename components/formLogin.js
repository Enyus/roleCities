import React, { useState } from 'react';
import { useRouter } from 'next/router'

import Input from '../components/input';
import Button from '../components/button';

import styles from '../styles/Forms.module.css'

export default function FormLogin(props) {

    let [validated, setValidated] = useState(false);
    let [emailValidated, setEmailValidated] = useState(false);
    let [passwordValidated, setPasswordValidated] = useState(false);

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
        
        router.push('/principal')
    };


    return (
        <form onSubmit={logarUsuario} onClick={checkValidation}>

            <Input
                label="Login"
                type="email"
                id="email"
                placeholder="nome@email.com"
                parentCallback={checkEmailValidation}
            />

            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="******"
                parentCallback={checkPasswordValidation}
            />

            <Button
                type="submit"
                id="login"
                content="Entrar"
                disabled={!validated}
            />

        </form>
    )
}