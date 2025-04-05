//Lab 7: JavaScript Events

//Mouse Events
const mouseBtn = mdocument.getElementById('mouseButton')
const mouseBtn = mdocument.getElementById('mouseMessage')

mouseBtn.addEventListener('mouseover', function() {
    mouseMsg.textContent ="You're blocking the light";
});
mouseBtn.addEventListener('mouseleave', function() {
    mouseMsg.textContent ="Wait come back!";
});