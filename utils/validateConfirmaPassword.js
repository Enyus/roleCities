export function validateConfirmaPassword(value) {
    // Pegar a senha:
    const valuePassword = document.getElementById('password').value;

    if (valuePassword == '' ||
        value != valuePassword ) {

            return false;
            
        }

    return true;

};