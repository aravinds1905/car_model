const arr = ["https://stimg.cardekho.com/images/car-images/930x620/Rolls-Royce/Ghost/8051/1602847337627/228_ensign-red_680f12.jpg", "https://stimg.cardekho.com/images/car-images/930x620/Rolls-Royce/Ghost/8051/1602847337627/235_silver_7b7d7f.jpg", "https://stimg.cardekho.com/images/car-images/930x620/Rolls-Royce/Ghost/8051/1602847337627/236_diamond-black_252525.jpg"];
const res = document.querySelector('#img');
function redCol() {

    res.src = arr[0];
}
function greyCol() {
    res.src = arr[1];
}

function blackCol() {
    res.src = arr[2];
}

const black = document.querySelector('#black');
black.addEventListener('click', blackCol);


const red = document.querySelector('#red');
red.addEventListener('click', redCol);

const grey = document.querySelector('#grey');
grey.addEventListener('click', greyCol);


const btn = document.querySelector('#cart');

function fun() {

    btn.innerText = "Your order is booked";
}

btn.addEventListener('click', fun);