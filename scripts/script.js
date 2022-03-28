let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchBar = document.querySelector('.search-bar-container');
let searchBtn = document.querySelector('#search-btn');

document.querySelector('#search-btn').onclick = () =>{

    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
}

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');

// document.querySelector('#login-btn').onclick = () =>{
//     loginForm.classList.toggle('active'); 
// }

// document.querySelector('#form-close').onclick = () =>{
//     formClose.classList.remove('active');  
// }
    
formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});



let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

