import { supabase } from "../../utils/supaBaseClient";
import * as bcrypt from 'bcrypt';

export default async function logarUsuario(req, res) {
    const { email, password } = req.body;

    let { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email);

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    let comparacao = await bcrypt.compare(password, data[0].senha)

    if (!comparacao) {
        return res.status(401).json({ error: 'usuário ou senha inválidos'})
    }

    // console.log(comparacao)

    return res.status(200).json({ data })
}