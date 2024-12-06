
// Retrieve the logged-in user from localStorage
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));

if (loggedInUser) {
    // Display the welcome message
    document.getElementById('username').textContent = `Welcome, ${loggedInUser.signupName}!`;
} else {
    // If no user is logged in, redirect to login page
    window.location.href = "login.html";
}


var logoutBtn = document.querySelector('#logout');
function logOut(){
    window.location.href = "login.html";
}
logoutBtn.addEventListener('click', logOut);
