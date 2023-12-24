'use strict'

const min = document.getElementById('min');
const max = document.getElementById('max');
const button = document.getElementById('button');
const result = document.getElementById('result');

button.onclick = function() {
    function getRandomIntInclusive(min1, max1) {
        min1 = Math.ceil(min1);
        max1 = Math.floor(max1);
        return Math.floor(Math.random() * (max1 - min1 + 1) + min1);
    }
    result.textContent = getRandomIntInclusive(Number(min.value), Number(max.value));
}