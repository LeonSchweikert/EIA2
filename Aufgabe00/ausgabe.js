document.addEventListener("DOMContentLoaded", function() {
   
    var enter = prompt("Enter your name");
    var hello = document.getElementById("hello");
    hello.innerHTML = "Hello " + enter;
    
});

