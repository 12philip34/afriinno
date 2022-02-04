
let email = document.querySelector('.input-email');
let password = document.querySelector('.input-password');
let loginButton = document.getElementById('button');

function checkInput() {
    if (email.value.length > 0 && password.value.length > 0) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}
/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
function myFunction() {
    document.getElementById("onclick").innerHTML = "by developing Mobile and Web applications that works, we help our clients deliver quality services to their existing and potential customers.\n" +
        "\n" +
        "            We have done it several times, we would sure to do it again!";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
