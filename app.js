
let check = document.querySelector("#checkbox");

//console.log(check);

/*let elements = document.querySelectorAll("#");

elements.forEach(function(element) {
    element.classList.toggle('dark-mode');
  }); */



check.onclick =  function() {
    
    document.body.classList.toggle("dark-mode");
    
}