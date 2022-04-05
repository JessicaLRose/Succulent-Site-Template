

// navbar scripts

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchBar.classList.remove('active');
    cartItem.classList.remove('active');
    
}

let searchBar = document.querySelector('.search-bar-container');
let searchBtn = document.querySelector('#search-btn');

document.querySelector('#search-btn').onclick = () =>{

    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
    cartItem.classList.remove('active');
}

window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    loginForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let formBtn = document.querySelector('#login-btn');
let loginLink = document.querySelector('#loginLink');
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

loginLink.addEventListener('click', () =>{
  loginForm.classList.add('active');
});


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}
// navbar scripts end

// registration form scripts
let validateFirstName = document.getElementById("InputFirstName");
let validateLasttName = document.getElementById("InputLastName");
let validateEmail = document.getElementById("InputEmail");
let validatePassword = document.getElementById("InputPassword");
let confirmPassword = document.getElementById("ConfirmPassword");

// const nameError = document.querySelector('#InputFirstName + span.error');
// let hasnumber = /\d/; //regex for numbers in name;


// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()



// about form
let selectInput = document.getElementById("select-box1");


selectInput.addEventListener("input", function(){
  let selectIndex = selectInput.selectedIndex;
  let makeSelection = selectInput.getElementsByTagName("option")[selectIndex].innerHTML;
  let label = document.querySelector('.label-desc');
  label.innerHTML = makeSelection;
  console.log(makeSelection);
})


  // $("select").on("click" , function() {
  
  //   $(this).parent(".select-box").toggleClass("open");
    
  // });
  
  // $(document).mouseup(function (e)
  // {
  //     var container = $(".select-box");
  
  //     if (container.has(e.target).length === 0)
  //     {
  //         container.removeClass("open");
  //     }
  // });
  
  
  // $("select-box1").on("change" , function() {
    
  //   var selection = $(this).find("option:selected").text(),
  //       labelFor = $(this).attr("id"),
  //       label = $("[for='" + labelFor + "']");
      
  //   label.find(".label-desc").html(selection);
      
  // });

  // about ends