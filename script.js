//NEVER FINISHED.
//Global variables to be used through program
let equation = 0;
let equationString ="";
let currentValue = "";
let currentSign ="";
let numbers = [];
let signals = [];

/* This function sets the result and print to screen */
function calc(){
  
  //While loop until to read all of equation string
  currentNum = ''
  while(equationString.length > 0){
    //Checks if current char is a number or not.
    if(equationString.charAt(0) >= '0' && equationString.charAt(0) <= 9){
      currentNum += equationString.charAt(0);
    }else{
      numbers.push(parseInt(currentNum))
      signals.push(equationString.charAt(0))
      currentNum ='';
    }
    equationString = equationString.substring(1,equationString.length);
    //Ends loop when string is zero
    if(equationString.length == 0){
      numbers.push(parseInt(currentNum))
      break;
    }
  }
  console.log(numbers);
  console.log(signals);

  //While loop to use every number for equation
  while(signals.length > 0){
    num1 = numbers.splice(0,1);
    num2 = numbers.splice
  }
  number = parseInt(document.getElementById('result').innerText) + equation;
  
  document.getElementById('result').innerText =number;
}

/* This function deletes one part of the result and print to screen*/
function deleteEq(){
  document.getElementById('equation').innerText = 
  document.getElementById('equation').innerText.substring(1, document.getElementById('equation').innerText.length)
}

/* This function resets the screen*/
function reset(){
  document.getElementById('equation').innerText = "";
  equationString ="";
  document.getElementById('result').innerText = 0;
}

/* This function increments a number to the global num value*/
function getNumber(){
}

/* Main Function */

  //Sets up the equation of the screen
  let div = document.createElement('div');
  div.id = 'equation';
  div.innerText = "";
  document.getElementById('input').append(div);
  //Sets up the result of the screen
  div = document.createElement('div');
  div.id = 'result';
  div.innerText = 0;
  document.getElementById('input').append(div);
  
  /* Event listener for all numbers */
  document.getElementById('one').addEventListener("click",e =>{
    equationString += '1';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('two').addEventListener("click",e =>{
    equationString += '2';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('three').addEventListener("click",e =>{
    equationString += '3';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('four').addEventListener("click",e =>{
    equationString += '4';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('five').addEventListener("click",e =>{
    equationString += '5';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('six').addEventListener("click",e =>{
    equationString += '6';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('seven').addEventListener("click",e =>{
    equationString += '7';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('eight').addEventListener("click",e =>{
    equationString += '8';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('nine').addEventListener("click",e =>{
    equationString += '9';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('zero').addEventListener("click",e =>{
    equationString += '0';
    document.getElementById('equation').innerText = equationString;
  })

  /* Event listeners for signs */
  document.getElementById('division').addEventListener("click",e =>{
    equationString += '/';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('multiply').addEventListener("click",e =>{
    equationString += '*';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('add').addEventListener("click",e =>{
    equationString += '+';
    document.getElementById('equation').innerText = equationString;
  })
  document.getElementById('minus').addEventListener("click",e =>{
    equationString += '-';
    document.getElementById('equation').innerText = equationString;
  })