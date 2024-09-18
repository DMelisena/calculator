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
    calOff=false
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

var calOff=true;
console.log(calOff)

var answer = 0
var num = 0

monitor.textContent=undefined

console.log('turned on')
operatorPad.forEach(function(button) {
  button.addEventListener("click", function() {
    if (calOff==true){
      monitor.textContent="0"
      console.log("theres no number on text and first yet, adding zero")
      calOff=false
      console.log("is off")
    }
    else if (first>0||first<0){
      second = (parseInt(text))
      console.log("calculating")
    }
    else{//if there is firstText, calculate the firstText and text and existing operator
      //move text to first monitor (change string into number)
      //add the operator to bottom left of screen
      firstText = monitor.innerHTML
      operatorText = button.innerHTML
      console.log("theres no number on first yet, storing operator and text to first")
      firstMonitor.textContent=firstText;
      first=parseInt(firstText)
      operatorMonitor.textContent=operatorText;
      text=0
      monitor.textContent=text
    }
  });
});

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
