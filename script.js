// User login JS

let username = document.getElementById("usrname");
let password = document.getElementById("passwrd");
// Event listener
document.getElementById("login-btn").addEventListener("click",login);
// Event function
function login() {
    // input
    console.log(username.innerHTML)
    if (username === "admin"){
        alert("Login Successful")
    }
}
