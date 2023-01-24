function validate(){
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var repeatPassword = document.getElementById("repeatPassword").value;
    var fullname = document.getElementById("fullname").value;
    var country = document.getElementById("country").value;
    var zipcode = document.getElementById("zipcode").value;
    var email = document.getElementById("email").value;
    var language = document.getElementById("language").value;
  
    var validity = true;
    
    if(username == ""){
      document.getElementById("username_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
      document.getElementById('username').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(username.length > 12 || (username.length < 5) || username.charCodeAt(0) < 65 || username.charCodeAt(0) > 90 || 
    (username.charCodeAt(username.length - 1) <= 90 && username.charCodeAt(username.length - 1) >= 65) || (username.charCodeAt(username.length - 1) <= 122 && username.charCodeAt(username.length - 1) >= 97)){
  
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
  
  
  
  
    if(password == ""){
      document.getElementById("password_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>Password is a required field</span>";
      document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(password.length < 12 ){
      document.getElementById("password_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>Please enter a valid password at least 12 characters long.</span>";
      document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(!passwordCheck(password)){
      document.getElementById("password_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>Please enter a valid password as a combination of uppercase letters, lowercase letters, numbers, and symbols.</span>";
      document.getElementById('password').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(password.length < 14){
      document.getElementById('password').style.border = "1.5px solid rgb(40, 154, 57)";
      document.getElementById("password_error").innerHTML = 
      "<span style='color: rgb(40, 154, 57);'>Not bad! But 14 or more characters would be better!</span>";
    }
    else{
      document.getElementById('password').style.border = "1.5px solid rgb(40, 154, 57)";
      document.getElementById("password_error").innerHTML = 
      "<span style='color: rgb(40, 154, 57);'>Looks good!</span>";
    }
  
  
  
    if(repeatPassword == ""){
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
  
  
  
  
    if(fullname == ""){
      document.getElementById("fullname_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
      document.getElementById('fullname').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(!fullnameCheck(fullname)){
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
  
  
  
    if(country == ""){
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
  
  
  
    if(zipcode == ""){
      document.getElementById("zipcode_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>Zipcode is a required field</span>";
      document.getElementById('zipcode').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(zipcode.length !== 6 || !zipcodeCheck(zipcode)){
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
  
  
  
    if(email == ""){
      document.getElementById("email_error").innerHTML = 
      "<span style='color: rgb(194, 35, 15);'>This is a required field</span>";
      document.getElementById('email').style.border = "1.5px solid rgb(194, 35, 15)";
      validity = false;
    }
    else if(!emailCheck(email)){
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
  
  
    if(language == ""){
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
      alert("Welcome!");
      window.location = "index.html";
    }
    
    return validity;
  }
  
  function emailCheck(email){
    var check1 = false;
    var check2 = false;
    var place = 0;
    for(var i = 1; i< email.length; i++){
      if(email.charCodeAt(i) = 64){
        check1 = true;
        place = i;
      }
    }
    for(var i = place+2; i< email.length; i++){
      if(email.charCodeAt(i) = 46){
        check2 = true;
      }
    }
    return check1 && check2;
  }

  function zipcodeCheck(zipcode){
    for(var i = 0; i<4; i++){
      if(!(zipcode.charCodeAt(i) <= 57 && zipcode.charCodeAt(i) >= 48)){
        return false;
      }
    }
    for(var i = 4; i<6; i++){
      if(!(zipcode.charCodeAt(i) <= 90 && zipcode.charCodeAt(i) >= 65)){
        return false;
      }
    }
    return true;
  }
  
  function passwordCheck(password){
    var lowercase = false;
    var uppercase = false;
    var number = false;
    var special_character = false;
    for(var i = 0; i < password.length; i++){
      if(password.charCodeAt(i) <= 90 && password.charCodeAt(i) >= 65){
        uppercase = true;
      }
      else if(password.charCodeAt(i) <= 122 && password.charCodeAt(i) >= 97){
        lowercase = true;
      }
      else if(password.charCodeAt(i) <= 57 && password.charCodeAt(i) >= 48){
        number = true;
      }
      else{
        special_character = true;
      }
    }
    return lowercase && uppercase && number && special_character;
  }
  
  
  function fullnameCheck(fullname){
    var tem = true;
    for(var i = 0; i < fullname.length; i++){
      if(!(fullname.charCodeAt(i) <= 90 && fullname.charCodeAt(i) >= 65 || fullname.charCodeAt(i) <= 122 && fullname.charCodeAt(i) >= 97)){
        tem = false;
      }
    }
    return tem;
  }
  