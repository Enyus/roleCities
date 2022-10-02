import { supabase } from "../../utils/supaBaseClient";
import * as bcrypt from 'bcrypt';

export default async function logarUsuario(req, res) {
    const { email, password } = req.body;

    let { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email);

    // console.log(data); // [] se não achar
    // console.log(error); // null se não achar

    // Checando se encontrou e-mail cadastrado:
    if (data.length < 1) {
        return res.status(404).json({error: 'usuário não cadastrado'})
    }

    // Checando se houve erro no servidor:
    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    let comparacao = await bcrypt.compare(password, data[0].senha)

    // console.log(comparacao)

    // Checando se a senha está correta:
    if (!comparacao) {
        return res.status(401).json({ error: 'usuário ou senha inválidos' })
    }

    return res.status(200).json({ data })
}