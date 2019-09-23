//  function writeToPage(question,anwser){
//     const page = document.getElementById("d1")
//     const newElement = document.createElement("h2")
//     newElement.textContent = question
// ​
//     const newElement2 = document.createElement("p")
//     newElement2.textContent = anwser
// ​
//     page.appendChild(newElement)
//     page.appendChild(newElement2)
// }
   // Create a div, with class "bar", and set the width to 100px.
  
   function writeToPage(num, display){
   var newElement = document.createElement("div");
   newElement.className = "bar";
   newElement.style.width = 500 + "px";
   newElement1 = document.createElement("span");
   let newText1 = document.createTextNode(display);
   newElement1.className = "span"
   newElement1.appendChild(newText1)
   

   // Place a text label inside the new div.
   var newText = document.createTextNode(num);
   newElement.appendChild(newText);
newElement.appendChild (newElement1)
   // Put the new div on the page inside the existing element "d1".
   var destination = document.getElementById("d1");
   destination.appendChild(newElement);
}



function oneThroughTwenty() {
    const numbers = [];
   
    // Your code goes below
for (let counter = 1; counter <= 20; counter++){
    numbers.push(counter)
}
    // 
return numbers
   
}
writeToPage("kata #1 ", oneThroughTwenty() ) 
    


function evensToTwenty() {
    const evennumbers = []
     // Your code goes below
for (let i=1; i <= 20; i++){
  if (i % 2 === 0){
  evennumbers.push (i)
}
   
  

} 
 return evennumbers 
}
writeToPage("kata #2 ",  evensToTwenty() )  
    
   
    
    
  function oddsToTwenty() {
    const numbers = []
    // Your code goes below
    for (let counter = 1; counter <= 20; counter++){  
 if (counter % 2 === 1){
numbers.push(counter)
}
}
return numbers
  }
  writeToPage("kata #3 ", oddsToTwenty() )



function multiplesOfFive() {
    const numbers = []
    // Your code goes below
    for (let counter = 5; counter <= 100; counter++){
        if(counter % 5 === 0){
            numbers.push(counter)
        }
    }

    

    return numbers
}
writeToPage("kata #4 ", multiplesOfFive() )

function squareNumbers() {
    const numbers = []
    // Your code goes below
    for(let counter = 1; counter <= 10; counter++){
        let square = counter * counter
        numbers.push(square)
    }
    

    return numbers
}
writeToPage("kata #5 ", squareNumbers() )

function countingBackwards() {
   const numbers = [];
   
    // Your code goes below
for (let counter =  20; counter >=  1; counter--){
    numbers.push(counter)
}
    // 

    return numbers 
    // Your code goes below

   
}
writeToPage("kata #6 ", countingBackwards() )

function evenNumbersBackwards() {
    const numbers = []
     // Your code goes below
for (let counter = 20; counter >= 0; counter--){
    if (counter % 2 === 0)
    numbers.push(counter)
}   
    
   

    // 

    return numbers
    
}
writeToPage("kata #7 ", evenNumbersBackwards() )

function oddNumbersBackwards() {
    const numbers = []
     // Your code goes below
     for (let counter = 20; counter >= 1; counter--){
        if (counter % 2 == 1)
    
        numbers.push(counter)
    }
     return numbers
}
writeToPage("kata #8 ", oddNumbersBackwards() )

function multiplesOfFiveBackwards() {
    const numbers = []
    // Your code goes below
    for(let counter = 100; counter >= 5; counter--){
        if (counter % 5 == 0)
      
        numbers.push(counter)
    }

    return numbers
}
writeToPage("kata #9 ", multiplesOfFiveBackwards() )

function squareNumbersBackwards() {
    const numbers = []
    // Your code goes below
    for (let counter = 10; counter >= 1; counter--){
        let square = counter * counter
       
       numbers.push(square)
        
    }

    return numbers
}
writeToPage("kata #10 ", squareNumbersBackwards() )


const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
    
    for ( let counter = 0; counter <= sampleArray.length-1; counter++) {
        writeToPage ("kata #11",  sampleArray [counter]) 
    
        
    } 
    
   // writeToPage("kata #11 ", sampleArray ) 