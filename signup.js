debugger;
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const birthday = document.getElementById('birthday');
const favoriteBeetle = document.getElementById('favorite-beetle');
const submitButton = document.querySelector('button.submit');
const formReturnMessageP = document.querySelector('p.form-return-message');

// validate form fields & give error/welcome messages
// validate first name

    firstName.addEventListener('input', () => {
        firstName.setCustomValidity('');
        firstName.checkValidity();
    })

    firstName.addEventListener('invalid', () => {
        if (firstName.value == "") {
            formReturnMessageP.innerHTML = `Please enter your name.`
        }
        else{
            formReturnMessageP.innerHTML = `You can only use upper and lower case letters.`
        }
    })



// submitButton.addEventListener('click', () => {
//     formReturnMessageP.innerHTML = `Thanks for signing up, ${firstName.value}! 
//     Make sure to visit the link in the validation email we sent to ${email.value} to start getting all the latest news from ${favoriteBeetle.value} and the rest of the crew!`
// })