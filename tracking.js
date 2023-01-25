var start = new Date();     // start time
var mouseClicks = 0;        // variable for tracking mouse clicks
var keyPresses = 0;         // variable for tracking key presses

document.addEventListener("click", function(){mouseClicks++;});     // eventlistener for mouse clicks
document.addEventListener("keypress", function(){keyPresses++;});   // eventlistener for key presses

var clicks = 0;              // variable for mouse clicks
var keyPress = 0;            // variable for key presses
var timeSpent = 0;           // variable for time spent on the page
var chars = 0;               // variable for total number of characters typed

function tracking(){
    clicks = mouseClicks;                       // final mouse clicks
    keyPress = keyPresses;                      // final key presses
    var end = new Date();                       // end time
    timeSpent = parseInt((end - start)/1000);   // time spent on the page
}

function trackingChar(){
    chars = document.getElementById("username").value.length + document.getElementById("password").value.length +
    document.getElementById("repeatPassword").value.length + document.getElementById("fullname").value.length + 
    document.getElementById("country").value.length + document.getElementById("address").value.length + 
    document.getElementById("zipcode").value.length + document.getElementById("email").value.length + 
    document.getElementById("language").value.length + document.getElementById("about").value.length;  // Total number of characters typed.

    document.getElementById("track").innerHTML = "Number of mouse clicks: " + clicks +  "<br>Total time spent: " + timeSpent +  " seconds"  
    + "<br>Total key presses: " + keyPress + "<br>Total number of characters typed: " + chars;    // load the content to the hidden div

    document.getElementById("track").removeAttribute("hidden");  // make the hidden div visivle
}

