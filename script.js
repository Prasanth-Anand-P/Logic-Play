const ham = document.querySelector('.ham');
const ul = document.querySelector('ul') 
ham.addEventListener('click',function(){
    ul.classList.toggle('show')
})