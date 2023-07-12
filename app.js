const inc = document.querySelector('.inc');
const dec = document.querySelector('.dec');
const people = document.querySelector('.people-count');
const bill = document.getElementById('bill-input');
const billSubmit = document.querySelector('.bill-button');
const tipButtons = document.querySelectorAll('.tip-button');
const tip = document.getElementById('tipAmount');
const total = document.getElementById('totalAmount');
const reset = document.querySelector('.reset-btn');

let peopleCounter = people.innerText;
let tipPercent = 0;
let billAmount = 0;
let tipAmount = 0;
let totalAmount = 0;

console.log(tipButtons);
inc.addEventListener('click', () => people.innerText++);
dec.addEventListener('click', () => {
  if (peopleCounter == 0) return people.innerText;
  else {
    return peopleCounter.innerHTML--;
  }
});
tipButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const buttonText = this.innerHTML;
    tipPercent = +buttonText.slice(0, -1);
  });
});

billSubmit.addEventListener('click', () => {
  console.log(+people.innerText);
  if (people.innerText == 0) people.innerText = 1;
  billAmount = +bill.value;
  tipAmount = (billAmount * tipPercent) / 100;
  totalAmount = tipAmount + billAmount;
  tip.innerText = tipAmount / +people.innerText;
  console.log('totalAMount' + totalAmount / +people.innerText);
  total.innerHTML = totalAmount / +people.innerText;
});
reset.addEventListener('click', () => {
  bill.value = 0;
  tip.innerText = 0;
  total.innerHTML = 0;
  people.innerText = 0;
});
