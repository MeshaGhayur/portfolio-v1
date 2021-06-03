(function() {
  var nav = document.getElementById('nav-list'),
      anchor = nav.getElementsByTagName('a'),
      current = window.location.pathname.split('/')[1];
      for (var i = 0; i < anchor.length; i++) {
      if(anchor[i].href == current) {
          anchor[i].className = "active";
      }
  }
})();

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
