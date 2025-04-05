// Lab 7: JavaScript Events

// Mouse Events
var mouseBtn = document.getElementById('mouseButton');
var mouseMsg = document.getElementById('mouseMessage');

mouseBtn.addEventListener('mouseenter', function () {
    mouseMsg.textContent = "Welp thats it!";
});
mouseBtn.addEventListener('mouseleave', function () {
    mouseMsg.textContent = "Come on Over!";
});

// Keyboard Events
const keyboardInput = document.getElementById('keyboardInput');
const keyMsg = document.getElementById('keyMessage');

keyboardInput.addEventListener('keypress', function (event) {
    keyMsg.textContent = `You pressed: ${String.fromCharCode(event.charCode)} (${event.charCode})`;
});

// Form Events
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    const formMsg = document.getElementById('formMessage');
    const formInput = document.getElementById('formInput');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        formMsg.textContent = "Form successfully submitted!";
    });
});

// Focus and Blur Events
var focusInput = document.getElementById('focusInput');
var focusMsg = document.getElementById('focusMessage');

focusInput.addEventListener('focus', function () {
    focusMsg.textContent = "Input is focused";
});
focusInput.addEventListener('blur', function () {
    focusMsg.textContent = "Get some glasses";
});

// Delegation Events
const delegateContainer = document.getElementById('delegationContainer');
const delegateMsg = document.getElementById('delegateMessage');

delegateContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'BUTTON') {
        delegateMsg.textContent = 'You clicked: ' + event.target.textContent;
    }
});