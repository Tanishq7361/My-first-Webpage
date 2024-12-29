
function imge(vl) {
  var pic;
  if (vl == -1) {
    pic = "img/1.jpg";
  }
  if (vl == 0) {
    pic = "img/2.jpg";
  }
  if (vl == 1) {
    pic = "img/3.jpg";
  }
  document.getElementById("turn").src = pic;
}

  function myFunction(x) {
    x.classList.toggle("change");
  }

  window.onscroll = function() {myFunction2()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction2() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
