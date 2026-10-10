const form = document.querySelector("form")
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");

form.addEventListener("submit", (event) =>
{
    if (password.value !== confirmPassword.value)
    {
        event.preventDefault();

        confirmPassword.setCustomValidity("Passwords dont match");
    }
    confirmPassword.setCustomValidity("");

    event.preventDefault();
    console.log("Form submitted")
})

confirmPassword.addEventListener("input", () => {
    confirmPassword.setCustomValidity("");
});