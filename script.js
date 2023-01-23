
var username = document.getElementById("username");
var password = document.getElementById("password");
var repeatPassword = document.getElementById("repeatPassword");
var fullname = document.getElementById("fullName");
var country = document.getElementById("country");
var zipcode = document.getElementById("zipcode");
var email = email.getElementById("email");

function validate(){
    
  if(username.value == ""){
    username.style.border = "2px solid red";
    document.getElementById('username').style.color = "red";
  }
   

    alert("Welcome");
        window.location = "index.html";
}
