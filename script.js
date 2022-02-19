const displayValue = document.getElementById('display');
const numBtn = document.querySelectorAll('.btn');
const actionBtns = document.querySelectorAll('.orange-row');
const clear = document.getElementById('clear');
const plus = document.getElementById('plus');


let tempValue = [];
let nextValue = [];

const numberSel = numBtn.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        tempValue.push(btn.innerText);
        console.log(tempValue);
    })
})

// const actionSel = actionBtns.forEach(btn => btn.addEventListener('click', () =>{

// }))

const test = clear.addEventListener('click', () => displayValue.innerText = clear.innerText)

const makeSum = plus.addEventListener('click', () =>{
    console.log(tempValue.reduce( (total, num) => total += num, 0))
})

const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
	return a - b; 
};

const sum = function(arr) {
  
};

const multiply = function(arr) {
  return arr.reduce( (total, num) => total *= num)
};

const power = function(a,b) {
	return Math.pow(a,b)
};

const factorial = function(num, total = 1) {
  if (num < 2){
    return total;
  }
	return factorial(num-1, num * total)
};



