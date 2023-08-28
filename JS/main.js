let email = document.getElementById('email');
let password = document.getElementById('password');
let erorrEmail = document.getElementById('erorr-email');
let erorrPassword = document.getElementById('erorr-password');
let submit = document.getElementById('submit');
let form = document.querySelector('form');


form.addEventListener('submit', (e) =>{
    let emailValid = false ;
    let passwordValid = false ;
    if(email.value.length >= 6 || email.value.includes("@")){
        emailValid = true;
    }
    if(password.value.length >= 4 || email.value.length <= 12){
        passwordValid = true;
    }
    if(emailValid === false){
        erorrEmail.innerHTML = "Please enter correct information and do not forget (@)"
        email.style.border = '1px solid red'
    }
    if(passwordValid === false){
        erorrPassword.innerHTML = "It must be between 4-12 characters"
        password.style.border = '1px solid red'
    }
    if(emailValid === false || passwordValid === false){
        e.preventDefault();
    }
})
