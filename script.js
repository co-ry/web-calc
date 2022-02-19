const displayValue = document.getElementById('display');
const numBtn = document.querySelectorAll('.btn');
let tempValue;
let nextValue;

const numberSel = numBtn.forEach(btn =>{
    btn.addEventListener('click', ()=> {
        tempValue = btn.innerText
    })
})



const clear = document.getElementById('clear');

const test = clear.addEventListener('click', () => displayValue.innerText = clear.innerText)