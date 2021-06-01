'use strict' 

let myForm = document.getElementById('myForm'); 
let table = document.getElementById('table'); 
let tBody = document.getElementsByTagName('tbody')[0]; 
let options = ['burger.jpg', 'pizza.jpg', 'shwarma.jpg']; 
let foods = []; 
function Order(custName, foodOrder){
this.custName= custName;
this.foodOrder= foodOrder; 
let price= Math.floor((Math.random() * 30) + 1);
foods.push(this); 
}
function settingFood(){
    let data = JSON.stringify(foods); 
    localStorage.setItem('your order', data); 
}
function gettingFood(){
    let stringOb = localStorage.getItem('your order'); 
    let normalOb = JSON.parse(stringOb); 
if (normalOb !== null){
    foods = normalOb; }
    render(); 
}

function remove(){
    while (tBody.firstElementChild){
        tBody.removeChild(tBody.firstElementChild); 
    }
}
function render(){
    remove(); 
    for(let i=0; i<foods.length; i++){
    let tableRow = document.createElement('tr'); 
    table.appendChild(tableRow); 
    let tdEl = document.createElement('td'); 
    tableRow.appendChild(tdEl); 
    tdEl.textContent = 'image'
    let tdEl2 = document.createElement('td'); 
    tableRow.appendChild(tdEl2); 
    tdEl2.textContent = '';
    let pEl = document.createElement('p'); 
    tdEl2.appendChild(pEl); 
    pEl.textContent = `Customer name: ${foods[i].custName}`; 
    let pEl1 = document.createElement('p'); 
    tdEl2.appendChild(pEl1); 
    pEl1.textContent = `Food Type: ${foods[i].foodOrder}`; 
    let pEl2 = document.createElement('p'); 
    tdEl2.appendChild(pEl2); 
    pEl2.textContent = `Food Price: ${foods[i].price}`; 
    }
}

function handlSubmit(event){
event.preventDefault(); 
let custName = event.target.custName.value;
let foodOrder = event.target.type.value; 
new Order(custName, foodOrder);  
settingFood(); 
console.log(foods); 
render();
}
myForm.addEventListener('submit', handlSubmit); 

gettingFood(); 