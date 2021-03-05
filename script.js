$( ".window" )
  .draggable({
    cancel: ".inside,input,textarea"
  });



$("input.address").focus(function(){
  $(".fa-refresh").hide(500);
this.select();
}).focusout(function(){
  $(".fa-refresh").show(500);
}); 

window.onload = function () {
    randomObject();
}


function randomObject() {
  let posx = Math.random() * (700 - 50) + 50;
  let posy = Math.random() * (700 - 50) + 50;
  console.log(posx);
  let temp = document.getElementsByClassName("window");
  // for(let i = 0; i < temp.length; i++) {
  //   temp[i].style.left = posx +"px";
  //   temp[i].style.top = posy +"px";
  //   posx = Math.random() * (700 - 50) + 50;
  //   posy = Math.random() * (700 - 50) + 50;
  // }
  temp[0].style.left = Math.random() * (90 - 10) + 0 +"vh";
  temp[0].style.top = Math.random() * (100 - 0) + 0 +"vw";

  temp[1].style.right = Math.random() * (80 - 20) + 0 +"vh";
  temp[1].style.bottom = Math.random() * (90 - 10) + 0 +"vw";


  temp[2].style.right = Math.random() * (70 - 30) + 0 +"vh";
  temp[2].style.bottom = Math.random() * (80 - 20) + 0 +"vw";




}