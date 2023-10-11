import { validatePassword  } from "./vallidate.js"
import { signUp  } from "./storage.js"


const signUpForm = document.getElementById("signup");
const fullNameField = signUpForm.elements["fullName"];
const userNameField = signUpForm.elements["userName"];
const passwordField = signUpForm.elements["password"];


const errorMessageDiv = document.getElementById("error-message");
const successMessageDiv = document.getElementById("success-message");

signUpForm.addEventListener("submit", function(event){
    event.preventDefault();

    const fullName = fullNameField.value;
    const username = userNameField.value;
    const password = passwordField.value;


    if(validatePassword(passwordField)){
        successMessageDiv.style.display = "block";
        errorMessageDiv.style.display = "none";
        signUp(fullName, username, password);
    } else{
        errorMessageDiv.style.display = "block";
        successMessageDiv.style.display = "none";
        return;
    }
})