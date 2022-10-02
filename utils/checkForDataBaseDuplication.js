import { supabase } from "./supaBaseClient";

export default async function checkForDataBaseDuplication(email) {

    let { data, error } = await supabase
        .from('usuarios')
        .select('*')
        .eq('email', email);

    console.log(data);
    console.log(data.length);
    console.log(data.length < 1);

    if (data.length < 1) {
        return false
    } else {
        return true
    }
}