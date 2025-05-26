const nme = document.getElementById('name');
const contact = document.getElementById('phone');
const user = document.getElementById('Usrname');
const email = document.getElementById('email');
const password = document.getElementById('pass');
const form = document.getElementById('form');

const nameError = document.getElementById('nameError');

form.addEventListener('submit', (evnt)=>{

    var mailCheck = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
    var userCheck = /^([A-Za-z0-9_\-\.])/
    if(nme.value == null || nme.value === ''||nme.value.lenght<3)
    {
        evnt.preventDefault();
        nameError.innerText = "*Please enter your correct name";
    }else{
        nameError.innerText = "";
    }

    if(contact.value===''||contact==null||contact.value.length<10){
        evnt.preventDefault();
        numError.innerText = "*Please enter your correct phone number";
    }else{
        numError.innerText = "";
    }

    if(user.value==''||user.value==null||!user.value.match(userCheck)){
        evnt.preventDefault();
        userError.innerText = "*Please enter your username";
    }else{
        userError.innerText = "";
    }

    if(!email.value.match(mailCheck)){
        evnt.preventDefault();
        emailError.innerText = "*Please enter valid email";
    }else{
        emailError.innerText = "";
    }

    if(password.value.length <= 4){
        evnt.preventDefault();
        passError.innerText = "*Passwork is too short";
    }else{
        passError.innerText = "";
    }

    if(password.value.length >= 15){
        evnt.preventDefault();
        passError.innerText = "*Passwork cannot be more than 14 characters";
    }else{
        passError.innerText = "";
    }

    if(password.value==='password'){
        evnt.preventDefault();
        passError.innerText = "*You cannot set password to password";
    }else{
        passError.innerText = "";
    }

    if(password.value===''){
        evnt.preventDefault();
        passError.innerText = "*Your password is too short";
    }else{
        passError.innerText = "";
    }
})