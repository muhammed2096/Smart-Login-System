var loginList = [];
loginList = JSON.parse(localStorage.getItem('loginList'))

var signInEmail = document.getElementById('signInEmail');
var signInPassword = document.getElementById('signInPassword');

function login() {
    if (signInEmail.value == "" || signInPassword.value == "") {
        document.getElementById("inValidLogin").classList.remove("d-none");
    } else {
        checkUser();
    }
}
function checkUser() {
    for (var i = 0; i < loginList.length; i++) {
        if (signInEmail.value == loginList[i].email && signInPassword.value == loginList[i].password) {
            var y = loginList[i].name;
            localStorage.setItem('userName', y);
            location.href = '../../home/index.html';
            break;
        }else{
            document.getElementById("inValid").classList.remove("d-none");
        }
    }
    
}