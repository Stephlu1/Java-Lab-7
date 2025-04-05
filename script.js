//Lab 7: JavaScript Events

//Mouse Events
var mouseBtn = mdocument.getElementById('mouseButton')
var mouseBtn = mdocument.getElementById('mouseMessage')

mouseBtn.addEventListener('mouseenter', function() {
    mouseMsg.textContent ="You're blocking the light";
});
mouseBtn.addEventListener('mouseleave', function() {
    mouseMsg.textContent ="Wait come back!";
});

//Keyboard Events
document.addEventListener('keypress', function(event) {
    console.log(`Character: ${event.charCode}`); 
    console.log(`Character pressed: ${String.fromCharCode(event.charCode)}`);
});

//Form Event
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('demoForm');
    const formMsg = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault(); 
        formMsg.textContent = "Form successfuly submited";
    });
