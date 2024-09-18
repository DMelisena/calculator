//TODO:
//A way to show numbers on LCD. first insert a
//a variable that states the operator (add/sub/times/divide/remainder)
//after the type of calculation set, delete the letter on monitor,insert b
//should the type of calculation be shown in the monitor?
//calculate the result on =, or calculate change a[]b into a then insert b 
//  if other operation is selected instead

//if number clicked, put number on monitor,
//if other button is clicked, put 0 on the monitor
const monitor = document.querySelector(".text-lcd")
const operatorMonitor = document.querySelector(".operator-lcd")
const numberPad = document.querySelectorAll(".number")
const operatorPad = document.querySelectorAll(".operator")
const firstMonitor = document.querySelector(".first-lcd")

var numClick=0

var text = "0";
var first = 0;
var second = 0;

numberPad.forEach(function(button) {
  button.addEventListener("click", function() {
    var numClick = button.innerHTML;
    console.log(numClick)
    console.log(numClick, "is clicked"); 
    if(text==0){
      text = numClick
    }
    else{
      text+=numClick
    }
    console.log(text, "is the monitor text");
    monitor.textContent = text;
  });
});


var operatorText=''
var firstText=''

const add = (a,b)=> {return a+b}
const subtract = (a,b)=> {return a-b}
const times = (a,b)=> {return a*b}
const divide = (a,b)=> {return a/b}
const power = (a,b)=> {return a**b}
const root = (a,b)=> {return Math.pow(a,1/b)}

var answer = 0
var num = 0

operatorPad.forEach(function(button) {
  button.addEventListener("click", function() {

    //look for the typed number and chosen operator
    firstText = monitor.innerHTML
    operatorText = button.innerHTML
    //chane the lower screen 
    firstMonitor.textContent=firstText;
    operatorMonitor.textContent=operatorText;
    monitor.textContent = text;
    first = parseInt(text)

    text=0
    monitor.textContent = text;
    //NOTE: NOW That first operand is stored,
    //the second text should be the second variable
    //
    ///NOTE: 
    //if first value exist, calculate
    //if no first value, only move it to first
    
    if(first!=0){
      switch(operatorMonitor.textContent){
        case '+':
          console.log("+ is executed")
          break;
        case '-':
          break;
        case '/':
          break;
        case '×':
          break;
        case '√':
          break;
        case '^':
          break;
      }
    }


    
  });
});
