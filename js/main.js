// login event handler
let button = document.querySelector('.btn');
button.addEventListener('click',function(){
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';
});


// deposit event handler
const depositButton = document.getElementById('deposit-btn');
 depositButton.addEventListener('click', function (){
     let depositInputAmount = document.getElementById('deposit-amount').value;
     let depositInputNumber = parseFloat(depositInputAmount);
     document.getElementById('db').innerText = depositInputNumber;
     let balance = document.getElementById('balance').innerText;
     let balanceToNumber = parseFloat(balance);
     let totalBalance = balanceToNumber + depositInputNumber;
     document.getElementById('balance').innerText = totalBalance;
 })