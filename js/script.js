const img1 = document.getElementById('first');
const img2 = document.getElementById('second');
const img3 = document.getElementById('third');
const img4 = document.getElementById('fourth');

const img = document.getElementById('art');

const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');

const shippingCharge = document.getElementById('shipping');
const total = document.getElementById('total');

function addTotal() {
    const shippingCharged = Number(shippingCharge.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharged + productPrice;
    total.innerText = grandTotal;
   
}

free.addEventListener('click', function () {
    shippingCharge.innerText = '5';
    addTotal()
 
});
express.addEventListener('click', function () {
    shippingCharge.innerText = '30';
    addTotal()
});

img1.addEventListener('click', function () {
    img.src = 'image/1.jpg';
    desc.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus';
    price.innerText = '950';
    addTotal()
});
img2.addEventListener('click', function () {
    img.src = 'image/2.jpg';
    desc.innerText = 'Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!';
    price.innerText = '850';
    addTotal()
});
img3.addEventListener('click', function () {
    img.src = 'image/3.jpg';
    desc.innerText = 'Consequatur rerum amet fuga expedita sunt et tempora saepe? Iusto nihil explicabo perferendis quos provident delectus ducimus necessitatibus reiciendis optio tempora unde earum doloremque commodi laudantium ad nulla vel odio?';
    price.innerText = '750';
    addTotal()
});
img4.addEventListener('click', function () {
    img.src = 'image/4.jpg';
    desc.innerText = 'Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!';
    price.innerText = '650';
    addTotal()
});
