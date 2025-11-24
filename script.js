const submitButton = document.querySelector("#submitButton");

function logIn() {
    event.preventDefault();

    const userEmail = document.querySelector("#userEmail");
    const userEmailValue = userEmail.value;
    console.log(userEmail, userEmailValue);

    const userPassword = document.querySelector("#userPassword");
    const userPasswordValue = userPassword.value;
    console.log(userPassword, userPasswordValue);

    const rememberMe = document.querySelector("#rememberMe");
    if (rememberMe.checked) {
        console.log("Is checked");
    } else {
        console.log("Is not checked");
    };

    const showPassword = document.querySelector("#showPassword");
    if (showPassword.checked) {
        console.log("Is checked");
        userPassword.type = "text";
    } else {
        console.log("Is not checked");
        userPassword.type = "password";
    };
};

submitButton.addEventListener("click", logIn);