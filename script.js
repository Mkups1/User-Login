// User login JS

let username = document.getElementById("usrname");
let password = document.getElementById("passwrd");
// Event listener
document.getElementById("login-btn").addEventListener("click",login);
// Event function
function login() {
    // input
    if (username.value === "admin" && password.value === "1234"){
        alert("Login Successful")
    } else if (username.value === "admin" && password.value !== "1234" ){
        alert("Invalid Password")
    } else if (username.value !== "admin"){
        alert("Invalid Username")
    }
}
