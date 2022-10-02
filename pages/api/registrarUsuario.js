import { supabase } from "../../utils/supaBaseClient";
import * as bcrypt from 'bcrypt';
import checkForDataBaseDuplication from "../../utils/checkForDataBaseDuplication";

export default async function registrarUsuario(req, res) {
    const { email, nome, password } = req.body;

    const hash = bcrypt.hashSync(password, 10);

    const emailDuplicado = await checkForDataBaseDuplication(email);

    // console.log(emailDuplicado);

    if(emailDuplicado) {
        return res.status(400).json({error: 'Usuário já cadastrado'})
    }

    let { data, error } = await supabase
        .from('usuarios')
        .insert([{
            email,
            personagem: nome,
            senha: hash
        }]);

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ data })
}