
function toggleOpen() {
  var element = document.getElementById("nav-list");

  if (element.classList) { 
    element.classList.toggle("open");
  } else {
    var classes = element.className.split(" ");
    var i = classes.indexOf("open");

    if (i >= 0) 
      classes.splice(i, 1);
    else 
      classes.push("open");
      element.className = classes.join(" "); 
  }
}

function addActive() {
  var current = location.pathname.split('/')[1];
  if (current === "") return;
  var menuItems = document.querySelectorAll('.nav-item a');
  for (var i = 0, len = menuItems.length; i < len; i++) {
      if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
          menuItems[i].className += "active";
      }
  }
}
addActive();

/* delete if it doesn't work

(function() {
  var anchor = document.getElementById('nav-list').getElementsByTagName("a"),
      current = window.location.pathname.split('/')[1];
      for (var i = 0; i < anchor.length; i++) {
      if(anchor[i].href == current) {
          anchor[i].className = "active";
      }
  }
})();
*/