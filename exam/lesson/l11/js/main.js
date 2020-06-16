// alert("hahaha!");
let btn2 =document.querySelector(".btn2");
btn2.onclick = function(){
    document.querySelector("#lamp").src="https://www.w3schools.com/js/pic_bulbon.gif";
}
let btn3 =document.querySelector(".btn3");
btn3.onclick = function(){
    document.querySelector("#lamp").src="https://www.w3schools.com/js/pic_bulboff.gif";
}
let btn4 =document.querySelector(".btn4");
btn4.onclick = function(){
    document.querySelector("#ct3").style.fontSize="12px";
    document.querySelector("#ct3").style.color="black";
}
let btn5 =document.querySelector(".btn5");
btn5.onclick = function(){
    document.querySelector("#ct3").style.fontSize="20px";
    document.querySelector("#ct3").style.color="purple";
}
let btn6 =document.querySelector(".btn6");
btn6.onclick = function(){
    document.querySelector("#ct4").style.display="none";

}
let btn7 =document.querySelector(".btn7");
btn7.onclick = function(){
    document.querySelector("#ct4").style.display="block";

}