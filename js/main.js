// login event handler
let button = document.querySelector('.btn');
button.addEventListener('click',function(){
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';
});


// deposit event handler
const depositButton = document.getElementById('deposit-btn');
 depositButton.addEventListener('click', function (){
     let previousDeposit = document.getElementById("deposit").innerText;
     let previousDepositToNumber = parseFloat(previousDeposit);
    
     let depositInputAmount = document.getElementById('deposit-amount').value;
     let depositInputNumber = parseFloat(depositInputAmount);

     let totalDeposit = previousDepositToNumber + depositInputNumber;
     document.getElementById('deposit').innerText = totalDeposit;
  
// adding amount to Balance
     let balance = document.getElementById('balance').innerText;
     let balanceToNumber = parseFloat(balance);
     let totalBalance = balanceToNumber + depositInputNumber;
     document.getElementById('balance').innerText = totalBalance;

     document.getElementById('deposit-amount').value = "0";
 });