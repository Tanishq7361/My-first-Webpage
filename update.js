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
    pic="img/1.jpg"
    }
    if(vl==0){
        pic="img/2.jpg"
    }
    if(vl==1){
        pic="img/3.jpg"
    }
    document.getElementById('turn').src = pic;

  }