
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var repeatPassword = document.getElementById("repeatPassword").value;
var fullname = document.getElementById("fullName").value;
var country = document.getElementById("country").value;
var zipcode = document.getElementById("zipcode").value;
var emai = email.getElementById("email").value;

function validate(){
    let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
   

    alert("Welcome");
        window.location = "index.html";
}
