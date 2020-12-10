import {localhostUrl} from "./settings/localhostUrl.js";
import {saveJwt} from "./utils/localstorage.js";
import {displayMessage} from "./components/common/displayMessage.js";

const loginForm = document.querySelector(".login-form");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const infoMessage = document.querySelector(".info-messages");

loginForm.addEventListener("submit", submitForm);

function submitForm(event) {
    event.preventDefault();

    infoMessage.innerHTML = "";

    const usernameInput = username.value.trim();
    const passwordInput = password.value.trim();

    if (usernameInput.length === 0 || passwordInput.length === 0) {
        return displayMessage("warning", "Check inputs", ".info-messages");
    }
    confirmLogin(usernameInput, passwordInput);
}

async function confirmLogin(username, password) {
    const url = localhostUrl + "auth/local";

    const data = JSON.stringify({ identifier: username, password: password });

    const options = {
        method: "POST",
        body: data,
        headers: {
            "Content-Type": "application/json",
        },
    };
 try {
        const response = await fetch(url, options);
        const json = await response.json();    

        if (json.user) {
           
            saveJwt(json.jwt);
            location.href = "index.html";
        }

        if (json.error) {
            displayMessage("warning", "Unknown inputs", ".info-messages");
        }
      
        
    } 
    catch (error) {
        displayMessage("warning", "Login error", ".info-messages");
        console.log(error);
    }
}