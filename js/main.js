/* show & hide menubar on toggle button click */
var toggleButton = document.getElementById("toggle-button");
var headerMenu = document.getElementById("header-menu");
function showMenu(){

    if (headerMenu.style.visibility=="visible"){
        headerMenu.style.visibility="hidden";
        headerMenu.style.opacity="0";
       
    } else {
        headerMenu.classList.add("show-menu");
        headerMenu.style.visibility="visible";
        headerMenu.style.opacity="1";
    }
}
/* Hide menubar when click outside */
window.onclick = function(event){
    if(!event.target.matches(".toggle-button") && !event.target.matches(".toggle-button span") && headerMenu.style.visibility=="visible")
    {
        headerMenu.style.visibility="hidden";
        headerMenu.style.opacity="0";
        headerMenu.style.transition="visibility 1s, opacity 0.5s linear";
    }
}
/* Add active class to current element of menubar lists */
var menuElements = document.getElementsByClassName("nav-item");

var btns = document.getElementsByClassName("nav-item");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace("active", "");
  this.classList.add("active");
  });
}