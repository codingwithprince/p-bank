// login event handler
let button = document.querySelector('.btn');
button.addEventListener('click', function () {
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';
});


// deposit event handler
const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function () {
    // input catching
    let depositInputAmount = document.getElementById('deposit-amount').value;
    let depositInputNumber = parseFloat(depositInputAmount);
    //  adding deposit input to Deposit amount
    changeBalance('deposit', depositInputNumber);
    //  adding deposit input to Balance amount
    changeBalance('balance', depositInputNumber);

    document.getElementById('deposit-amount').value = "0";
});

//  withdraw event handler
const withdrawButton = document.getElementById('withdrawButton');
withdrawButton.addEventListener('click', function () {
    //   input catching
    let withdrawInput = document.getElementById('withdrawAmount').value;
    let withdrawInputToNumber = parseFloat(withdrawInput);
    // changing withdraw balance
    changeBalance('withdraw', withdrawInputToNumber);
    // decreasing balance from main balance
    minusBalance('balance', withdrawInputToNumber);

    document.getElementById('withdrawAmount').value = "0";
});

//   balance adding handler
function changeBalance(id, previousAmount) {
    let balance = document.getElementById(id).innerText;
    let balanceToNumber = parseFloat(balance);
    let totalBalance = balanceToNumber + previousAmount;
    document.getElementById(id).innerText = totalBalance;
}
// Balance deleting handler
function minusBalance(id, inputNumber) {
    let latestBalance = document.getElementById(id).innerText;
    let latestBalanceToNumber = parseFloat(latestBalance);
    let leftBalance = latestBalanceToNumber - inputNumber;
    document.getElementById(id).innerText = leftBalance;

}