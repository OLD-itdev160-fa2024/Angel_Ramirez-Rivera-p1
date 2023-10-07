var user = "Angel";
var salutation = "Hello, ";
var greeting = salutation + user + '! Welcome to our shoe store';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting; 

var title = "Retro Shoes";
var header = title;
var headerEl = document.getElementById("header");

headerEl.textContent = header;


function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

