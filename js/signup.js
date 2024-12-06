// select inputs
var signupNameInput = document.querySelector('#signupName');
var signupEmailInput = document.querySelector('#signupEmail');
var signupPassInput = document.querySelector('#signupPass');

// select button
var signupBtn = document.querySelector('#signupBtn');

// console.log(signupNameInput,signupEmailInput, signupPassInput , signupBtn);

// el arr lly h5zn fel el object
var userInfo;


// check data in localStorage
if(localStorage.getItem('userInformation') !==null){
    userInfo = JSON.parse(localStorage.getItem('userInformation'));
    // console.log(userInfo);
} else{
    var userInfo =[];
}

// check email is exist 
function isEmailExist() {
    for (var i = 0; i < userInfo.length; i++) {
        if (userInfo[i].signupEmail.toLowerCase() == signupEmailInput.value.toLowerCase()) {
            return false
        }
        else{
            return true
        }
    }
}

function validateName(name) {
    return /^[a-zA-Z\s]{3,}$/.test(name); // At least 3 characters, only letters and spaces
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Basic email format
}

function validatePassword(password) {
    return /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password); // At least 6 chars, 1 letter, 1 number
}


// signUp function
function signup(){
    // check empty :
    if(signupNameInput.value == "" || signupEmailInput.value == "" || signupPassInput.value == ""){
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">All inputs is required</span>'
        return false
    }

    // Validate Name
    if (!validateName(signupNameInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Name should be at least 3 characters long and contain only letters and spaces.</span>';
        return false;
    }

    // Validate Email
    if (!validateEmail(signupEmailInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Invalid email format.</span>';
        return false;
    }

    // Validate Password
    if (!validatePassword(signupPassInput.value)) {
        document.getElementById('present').innerHTML = '<span class="text-danger m-3">Password should be at least 6 characters long and contain at least one letter and one number.</span>';
        return false;
    }


   //hn5zn kol el vars as object
    var client = {
        signupName :  signupNameInput.value,
        signupEmail : signupEmailInput.value,
        signupPass : signupPassInput.value,
    }
    // console.log(client);


    if (userInfo.length == 0) {
                userInfo.push(client)
                localStorage.setItem('userInformation', JSON.stringify(userInfo))
                document.getElementById('present').innerHTML = '<span class="text-success m-3">Success</span>'
                return true
            }

    // check email
    if (isEmailExist() == false) {
    document.getElementById('present').innerHTML = '<span class="text-danger m-3">email already exists</span>'
        
} else {
    userInfo.push(client)
    localStorage.setItem('userInformation', JSON.stringify(userInfo))
    document.getElementById('present').innerHTML = '<span class="text-success m-3">Success</span>'
    }
}
signupBtn.addEventListener('click' , signup);
