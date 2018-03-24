document.addEventListener("DOMContentLoaded", function(): void{
   
    var enter: string = prompt("Enter your name");
    var hello: HTMLElement = document.getElementById("hello");
    hello.innerHTML = "Hello " + enter;
    
});



