// btn event listener
let button = document.querySelector('.btn');
button.addEventListener('click',function(){
    document.getElementById('welcome-section').style.display = 'none';
    document.getElementById('main-area').style.display = 'block';
});
