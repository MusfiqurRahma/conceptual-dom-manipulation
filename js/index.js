const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');
const div4 = document.getElementById('fourth');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free= document.getElementById('free');
const express = document.getElementById('express');

const shipping = document.getElementById('shipping');
const total = document.getElementById('total');

free.addEventListener('click', function () {
    shipping.innerText = '5';
    updateTotal()
})
express.addEventListener('click', function () {
    shipping.innerText = '30';
    updateTotal()
})

// changing total price
function updateTotal() {
    const shippingCharge = Number(shipping.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;
}

div1.addEventListener('click', function () {
    // changing image
    img.src = 'image/1.jpg';
    // changing description
    desc.innerText = 'first- lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25';
// changing price
    price.innerText = '850';
    updateTotal()
})
div2.addEventListener('click', function () {
    img.src = 'image/2.jpg';
    desc.innerText = 'second- lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25';
    price.innerText = '750';
    updateTotal()
})
div3.addEventListener('click', function () {
    img.src = 'image/3.jpg';
    desc.innerText = 'third -lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25';
    price.innerText = '650';
    updateTotal()
})
div4.addEventListener('click', function () {
    img.src = 'image/4.jpg';
    desc.innerText = 'fourth--lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25 lorem25 lorem 25 lorem 25';
    price.innerText = '550';
    updateTotal()
});