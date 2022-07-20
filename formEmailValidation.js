const form = document.querySelector("form");
const inputField =document.querySelector("#email");

form.addEventListener("submit", (e) => {

    const emailInput = inputField.value;
    const errorMsg = document.querySelector(".error-msg");
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if (emailInput === "" || emailInput === null) {

        errorMsg.style.display = "block";
        inputField.classList.add("error-border");
        errorMsg.innerHTML = "Whoops! It looks like you forgot to add your email";
        inputField.setAttribute("aria-invalid", "true");
        inputField.setAttribute("aria-describedBy", "error");

    } else if (!emailInput.match(emailRegex)) {

        errorMsg.style.display = "block";
        inputField.classList.add("error-border");
        errorMsg.innerHTML = "Please provide a valid email address";
        inputField.setAttribute("aria-invalid", "true");
        inputField.setAttribute("aria-describedBy", "error");

    } else {

         errorMsg.style.display = "none";
         inputField.classList.remove("error-border");
         inputField.removeAttribute("aria-invalid");
         inputField.removeAttribute("aria-describedBy");
         inputField.value = "";

    }
    e.preventDefault();
});