/**
 * background generator JS code
 */
let elementBody = document.querySelector('body')
let firstColor = document.querySelector('#firstColor');
let secondColor = document.querySelector('#secondColor');
console.log(firstColor.value)

firstColor.addEventListener('input', function () {
    elementBody.style = 'background: linear-gradient(to right,' + firstColor.value + ',' + secondColor.value + ');';
    document.querySelector('p').innerText = elementBody.style.background
});

secondColor.addEventListener('input', function () {
    elementBody.style = 'background: linear-gradient(to right,' + firstColor.value + ',' + secondColor.value + ');';
});