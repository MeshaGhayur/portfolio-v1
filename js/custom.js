
function toggleOpen() {
  var element = document.getElementById("nav-list");

  if (element.classList) {
    element.classList.toggle("open");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0){
      classes.splice(i, 1);

    } else {
      classes.push("open");
      element.className = classes.join(" ");
    }
  }
  var button = document.querySelector(".nav-button")
  var x = button.getAttribute("aria-expanded");
  if (x == "true"){
    x = "false"
    } else {
      x = "true"
    }
  button.setAttribute("aria-expanded", x);
}

window.addEventListener("load", function(){
  var current = location.pathname.split('/')[1] + location.hash;
  if (current === "") return;
  var menuItems = document.querySelectorAll('.nav-item a');
  for (var i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += " active";
      }
  }
});


