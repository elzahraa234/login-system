// Select inputs and button and paragraph
var loginEmailInput = document.querySelector('#loginEmail');
var loginPassInput = document.querySelector('#loginPass');
var loginBtn = document.querySelector('#loginBtn');
var loginMessage = document.querySelector('#incorrect');

// Check data in localStorage
var userInfo = [];
if (localStorage.getItem('userInformation') !== null) {
    userInfo = JSON.parse(localStorage.getItem('userInformation'));
}

// Login function
function login() {
     // check empty :
    if(loginEmailInput.value == "" || loginPassInput.value == ""){
        document.getElementById('incorrect').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    var email = loginEmailInput.value.toLowerCase();
    var password = loginPassInput.value;

    // Check if the email and password match any user in userInfo
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].signupEmail.toLowerCase() === email && userInfo[i].signupPass === password) {
            // Valid user, redirect to welcome page
            localStorage.setItem('loggedInUser', JSON.stringify(userInfo[i]));
            window.location.href = "../pages/welcome.html";
            return;
        }
    }

    // If no match, display incorrect message
    loginMessage.innerHTML = '<span style="color: red;">Email or password is incorrect</span>';
}

loginBtn.addEventListener('click', login);




