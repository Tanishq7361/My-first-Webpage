alert("Welcome to my website");

function myfunction(){
    alert("you clicked");
}
function mFunction() {
    document.getElementById("hello").style.fontSize = "25px";         
  }
  function imge(vl){
    var pic;
    if(vl==-1){
    pic="C:/Users/DELL/Pictures/Camera Roll/WIN_20241209_23_19_13_Pro.jpg"
    }
    if(vl==0){
        pic="C:/Users/DELL/Pictures/Camera Roll/WIN_20241209_23_19_10_Pro.jpg"
    }
    if(vl==1){
        pic="C:/Users/DELL/Pictures/Camera Roll/WIN_20241209_23_19_16_Pro.jpg"
    }
    document.getElementById('turn').src = pic;

  }