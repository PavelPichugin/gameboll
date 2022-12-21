let ballNode = document.querySelector(`#ball`);
let balloneNode = document.querySelector(`#ballone`);
let balltwoNode = document.querySelector(`#balltwo`);
let ballthreeNode = document.querySelector(`#ballthree`);
let ballthought = document.querySelector(`#ballthought`);

let nextNode = document.querySelector(`#next`)
let amountNode = document.querySelector(`#amount`);
let rep = document.querySelector(`#rep`);


let count = 20;


ballNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nextNode.classList.remove(`d-none`);
    } 
})



balloneNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nextNode.classList.remove(`d-none`);
    } 
})

balltwoNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nextNode.classList.remove(`d-none`);
    
    } 
})
ballthreeNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nextNode.classList.remove(`d-none`);
    
    }
     
})

ballthreeNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nextNode.classList.remove(`d-none`);
    
    }
     
})

