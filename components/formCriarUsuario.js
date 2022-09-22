import React, { useState } from 'react';
import Input from '../components/input';
import Button from '../components/button';

export default function FormCriarUsuario(props) {

    let [validated, setValidated] = useState(false);

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
    }

    return (
        <form onSubmit={registerUser}>
            <Input
                label="E-mail"
                type="email"
                id="email"
                placeholder="nome@email.com"
            />

            <Input
                label="Nome do Personagem"
                type="text"
                id="nome"
                placeholder="Gandalf"
            />

            <Input
                label="Senha"
                type="password"
                id="password"
                placeholder="******"
            />

            <Input
                label="Confirma Senha"
                type="password"
                id="confirma-password"
                placeholder="******"
            />

            <Button
                type="submit"
                id="cadastrar"
                content="Cadastrar"
                disabled={!validated}
            />
        </form>
    )
};