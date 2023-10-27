var signUpName = document.getElementById('signUpName');
var signUpEmail = document.getElementById('signUpEmail');
var signUpPassword = document.getElementById('signUpPassword');
var loginList = [];

if (localStorage.getItem('loginList') != null) {
    loginList = JSON.parse(localStorage.getItem('loginList'))
} else {
    loginList = [];
}

function signUp() {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        document.getElementById("inCorrect").classList.remove("d-none");
    } else {
        var user = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        }
        for (var i = 0; i < loginList.length; i++) {
            if (loginList[i].email == signUpEmail.value) {
                document.getElementById("emailIsExist").classList.remove("d-none");
                return;
            }
        }
        loginList.push(user);
        document.getElementById("correct").classList.remove("d-none");
        localStorage.setItem('loginList', JSON.stringify(loginList));
    }
}