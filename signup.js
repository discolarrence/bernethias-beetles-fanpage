// debugger;
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const favoriteBeetle = document.getElementById('favorite-beetle');
const submitButton = document.querySelector('button.submit');
const formReturnMessageP = document.querySelector('p.form-return-message');
const nameRegex = /^[a-zA-Z]+$/;
const emailRegex =  / ^ ( ( [ \ - \ w ] + ) \ . ? ) + @ ( ( [ \ - \ w ] + ) \ . ? ) + \ . [ a - zA -Z ] { 2 , 4 } $ /;

// validate form fields & give error/welcome messages
// validate first name
function validateFirstName() {
    if (nameRegex.test(firstName.value) == false) {
        formReturnMessageP.textContent = "Only upper and lower case letters are allowed.";
    }
    if (firstName.value.length == 0) {
        formReturnMessageP.textContent = "Please enter your first name.";
    }

};

// validate Email
function validateEmail() {
    if (emailRegex.test(email.value) == false || firstName.value.length == 0) {
        formReturnMessageP.textContent = "Please enter a valid email address.";
    }
}

// validate on click
submitButton.addEventListener('click', () => {
        validateFirstName();
        validateEmail();
    })


