const btnEl = document.getElementById("button");


btnEl.addEventListener("click", validate);

function validate(e) {
    e.preventDefault();

    const mailField = document.getElementById("mail");
    let valid = true;

    if (!mailField.checkValidity() || mailField.value=="") {
        const mailError = document.getElementById("error");
        mailError.classList.add("visible");
        mailField.classList.add("invalid");
        mailField.value="";
    }
    else {
        window.open("error-msg.html");
        mailField.value="";
    }
    return valid;
}