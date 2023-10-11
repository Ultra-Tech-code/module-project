export function validatePassword(passwordField){
    const passwwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const password = passwordField.value.trim();
    if(passwwordRegex.text(password) === false){
        return false;
    }else{
        return true;   
    }
    
}