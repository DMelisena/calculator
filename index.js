//TODO:
//A way to show numbers on LCD. first insert a
//a variable that states the operator (add/sub/times/divide/remainder)
//after the type of calculation set, delete the letter on monitor,insert b
//should the type of calculation be shown in the monitor?
//calculate the result on =, or calculate change a[]b into a then insert b 
//  if other operation is selected instead

//if number clicked, put number on monitor,
//if other button is clicked, put 0 on the monitor
const monitor = document.querySelector(".lcd")
const numberPad = document.querySelectorAll(".number")
const operatorPad = document.querySelectorAll(".operator")

var numClick=0

var text = "0";
var first = 0;
var second = 0;

