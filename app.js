let whatToDo = document.querySelector('.to-do');
let deposited = document.querySelector('.amount-dep');
let withdrawn = document.querySelector('.amount-with');
let currentBalance = document.querySelector('.current-bal');
let balance = 0;
let message = '';

function toDo() {
  let yourName = prompt('Enter your name').toUpperCase();
  message = `Hello!! ${yourName}.... This is a new account. What would you like to do today?`
  whatToDo.textContent = message;
  deposited.textContent = `Amount Deposited: ${0}`;
  withdrawn.textContent = `Amount Withdrawn: ${0}`;
  currentBalance.textContent = `Current Balance: ${0}`;
}

function deposit() {
  let amountDeposited = parseInt(prompt('Enter amount to deposit'));
  message = `You have successfully deposited $${amountDeposited}`;
  deposited.textContent = 'Amount Deposited: $' + amountDeposited;
  balance += amountDeposited;
  currentBalance.textContent = `Current Balance: $${balance}`;
  withdrawn.textContent = `Amount Withdrawn: $${0}`;
  whatToDo.textContent = message;
  console.log(balance);
}

function withdraw() {
  let amountWithdrawn = parseInt(prompt('Enter amount to withdraw'));
  if (amountWithdrawn <= balance) {
    balance -= amountWithdrawn;
    message = `You have successfully withdrawn $${amountWithdrawn}`;
    withdrawn.textContent = `Amount Withdrawn: $${amountWithdrawn}`;
    whatToDo.textContent = message;
    currentBalance.textContent = `Current Balance: $${balance}`;
  } else {
    message = `Insufficient funds`;
    whatToDo.textContent = message;
  }
}

function myBalance() {
  message = `Available Balance: $${balance}`;
  whatToDo.textContent = message;
}
