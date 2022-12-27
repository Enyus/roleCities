import { supabase } from "../../utils/supaBaseClient";

export default async function buscarCidade(req, res) {
    const { id } = req.body;

    const { data, error } = await supabase
        .from('cidades')
        .select('*')
        .eq('id', id);

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    // console.log(data);

    return res.status(200).json({ data })
}