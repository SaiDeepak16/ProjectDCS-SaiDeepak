const form = document.getElementById('email-form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    alert('Please enter your email address.');
  } else if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
  }
});

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  loginForm.classList.toggle('active');
  signup.classList.remove('active');
  menu.classList.remove('active');
}

let signup = document.querySelector('.signup-form');

document.querySelector('#signup-btn').onclick = () => {
  signup.classList.toggle('active');
  loginForm.classList.remove('active');
  menu.classList.remove('active');
}

let menu = document.querySelector('.men-itm');

var menuBtn = document.getElementById("menu-btn");
document.querySelector('#menu-btn').onclick = () => {
  menu.classList.toggle('active');
  signup.classList.remove('active');
  loginForm.classList.remove('active');
  menuBtn.classList.toggle("fa-bars");
  menuBtn.classList.toggle("fa-times");
}


window.onscroll = () => {
  loginForm.classList.remove('active');
  signup.classList.remove('active');
  menu.classList.remove('active');
  menuBtn.classList.add("fa-bars");
  menuBtn.classList.remove("fa-times");
}

const viewbtn = document.querySelector(".viewm");
var features = document.querySelectorAll(".feature");
viewbtn.addEventListener("click", function () {
  for( var i = 3 ; i < features.length ; i++){
    features[i].classList.toggle('close');
    if(features[i].classList.contains('close')){
      viewbtn.innerHTML = "View more benefits";
    }
    else{
      viewbtn.innerHTML = "View less";
    }
  }
});

function activateCard(icon) {
  var features = icon.parentNode.nextElementSibling;
  features.classList.toggle("close");
  icon.classList.toggle("fa-angle-down");
  icon.classList.toggle("fa-angle-up");
}
