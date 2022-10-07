import { supabase } from "../../utils/supaBaseClient";

export default async function buscarRegiao(req, res) {
    const { id } = req.body;

    const { data, error } = await supabase
        .from('regiao')
        .select('*')
        .eq('id', id);

    if (error) {
        console.log(error);
        return res.status(401).json({ error: error.message })
    }

    return res.status(200).json({ data })
}