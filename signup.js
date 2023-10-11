import { validatePassword  } from "./validate.js"
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

   signUp(fullName, username, password);

    if(validatePassword(passwordField)){
        successMessageDiv.style.display = "block";
        errorMessageDiv.style.display = "none";
    } else{
        errorMessageDiv.style.display = "block";
        successMessageDiv.style.display = "none";
    }
})