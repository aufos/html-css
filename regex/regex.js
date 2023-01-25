function validate(){
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeatPassword").value;
  var fullname = document.getElementById("fullname").value;
  var country = document.getElementById("country").value;
  var zipcode = document.getElementById("zipcode").value;
  var email = document.getElementById("email").value;
  var language = document.getElementById("language").value;

  var pattern = /^.{1,}$/;
  var validity = true;

  
  if(!pattern.test(username)){
    document.getElementById("username_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
    document.getElementById('username').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!username.match(/^([A-Z]+.*\W+)$/) || !username.match(/^.{5,12}$/)){
    document.getElementById("username_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Please enter a valid username of 5-12 characters, start with a capital letter and end with a number or a special character</span>";
    document.getElementById('username').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  } 
  else{
    document.getElementById('username').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("username_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }


  if(!pattern.test(password)){
    document.getElementById("password_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Password is a required field</span>";
    document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!password.match(/^.{12,}$/)){
    document.getElementById("password_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Please enter a valid password at least 12 characters long.</span>";
    document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*\W).*$/)){
    document.getElementById("password_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Please enter a valid password as a combination of uppercase letters, lowercase letters, numbers, and symbols.</span>";
    document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!password.match(/^.{14,}$/)){
    document.getElementById('password').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("password_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Not bad! But 14 or more characters would be better!</span>";
  }
  else{
    document.getElementById('password').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("password_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }



  if(!pattern.test(repeatPassword)){
    document.getElementById("repeatPassword_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'> Please repeat your password</span>";
    document.getElementById('repeatPassword').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(repeatPassword !== password){
    document.getElementById("repeatPassword_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Passwords don't match.</span>";
    document.getElementById('repeatPassword').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else{
    document.getElementById('repeatPassword').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("repeatPassword_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }




  if(!pattern.test(fullname)){
    document.getElementById("fullname_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
    document.getElementById('fullname').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!fullname.match(/^[A-Za-z]+$/)){
    document.getElementById("fullname_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Please use alphabet only.";
    document.getElementById('fullname').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  } 
  else{
    document.getElementById('fullname').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("fullname_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }



  if(!pattern.test(country)){
    document.getElementById("country_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Country is a required field</span>";
    document.getElementById('country').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else{
    document.getElementById('country').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("country_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }



  if(!pattern.test(zipcode)){
    document.getElementById("zipcode_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Zipcode is a required field</span>";
    document.getElementById('zipcode').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!zipcode.match(/^(\d){4}[A-Z]{2}$/)){
    document.getElementById("zipcode_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>PLease fill in the right format for zipcode(0000AA).</span>";
    document.getElementById('zipcode').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else{
    document.getElementById('zipcode').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("zipcode_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }



  if(!pattern.test(email)){
    document.getElementById("email_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
    document.getElementById('email').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else if(!email.match(/^[a-zA-Z]+.*@[a-zA-Z0-9-]+\.+.+$/)){
    document.getElementById("email_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>Please enter valid email address</span>";
    document.getElementById('email').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else{
    document.getElementById('email').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("email_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }


  if(!pattern.test(language)){
    document.getElementById("language_error").innerHTML = 
    "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
    document.getElementById('language').style.border = "1.5px solid rgb(194, 35, 15)";
    validity = false;
  }
  else{
    document.getElementById('language').style.border = "1.5px solid rgb(40, 154, 57)";
    document.getElementById("language_error").innerHTML = 
    "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
  }

  if(validity){
    alert("Welcome!\nHere is your information:\n\nUsername: " + username + "\nPassword: " + password +"\nFullname: " 
    + fullname + "\nAddress: " + address + "\nCountry:" + country +"\nZipcode: " + zipcode + "\nEmail: " + email
    + "\nSex: " + document.querySelector('input[name="sex"]:checked').value + "\nLanguage: " + language + "\nAbout: \n" + about);
    window.location = "index.html";
  }
  
  return validity;

}

  