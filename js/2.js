let ballNode = document.querySelector(`#ball`);
let balloneNode = document.querySelector(`#ballone`);
let balltwoNode = document.querySelector(`#balltwo`);
let ballthreeNode = document.querySelector(`#ballthree`);
let nextNode = document.querySelector(`#next`)
let nexttwoNode = document.querySelector(`#nexttwo`)

let amountNode = document.querySelector(`#amount`);

let count = 30;


ballNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;

    if (count == 0) {
        nexttwoNode.classList.remove(`d-none`);
    
    }
})



balloneNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nexttwoNode.classList.remove(`d-none`);
    
    } 
})

balltwoNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nexttwoNode.classList.remove(`d-none`);
    
    } 
})
ballthreeNode.addEventListener(`click`, function () {
    count = count - 1;
    amountNode.innerHTML = count;
    if (count == 0) {
        nexttwoNode.classList.remove(`d-none`);
    
    }
     
})


