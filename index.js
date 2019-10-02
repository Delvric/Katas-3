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

function Kata1 ()
{
   let arr = [];
   for (let i = 1; i <= 20; i++)
   {
       arr.push(" " + i);
   }
   document.getElementById("K1").innerHTML = "Katas1=" + arr;
}
Kata1();


function Kata2 ()
{
   let arr = [];
   for (let i = 2; i <= 20; i += 2)
   {
       arr.push(" " + i);
   }
   document.getElementById("K2").innerHTML = "Katas2=" + arr;
}
Kata2();


function Kata3 ()
{
   let arr = [];
   for (let i = 1; i <= 20; i+= 2)
   {
       arr.push(" " + i);
   }
   document.getElementById("K3").innerHTML = "Katas3=" + arr;
}
Kata3();


function Kata4 ()
{
   let arr = [];
   for (let i = 5; i <= 100; i+= 5)
   {
       arr.push(" " + i);
   }
   document.getElementById("K4").innerHTML = "Katas4=" + arr;
}
Kata4();


function Kata5 ()
{
   let arr = [];
   for (let i = 1; i <= 10; i++)
   {
       arr.push(" " + i*i);
   }
   document.getElementById("K5").innerHTML = "Katas5=" + arr;
}
Kata5();


function Kata6 ()
{
   let arr = [];
   for (let i = 20; i >= 1; i--)
   {
       arr.push(" " + i);
   }
   document.getElementById("K6").innerHTML = "Katas6=" + arr;
}
Kata6();


function Kata7 ()
{
   let arr = [];
   for (let i = 20; i >= 1; i-= 2)
   {
       arr.push(" " + i);
   }
   document.getElementById("K7").innerHTML =  "Katas7=" + arr;
}
Kata7();


function Kata8 ()
{
   let arr = [];
   for (let i = 19; i >= 1; i-= 2)
   {
       arr.push(" " + i);
   }
   document.getElementById("K8").innerHTML = "Katas8=" + arr;
}
Kata8();


function Kata9 ()
{
   let arr = [];
   for (let i = 100; i > 0; i-= 5)
   {
       arr.push(" " + i);
   }
   document.getElementById("K9").innerHTML = "Katas9=" + arr;
}
Kata9();


function Kata10 ()
{
   let arr = [];
   for(let i = 10; i >= 1; i--)
   {
       arr.push(" "+ i*i);
   }
   document.getElementById("K10").innerHTML = "Katas10=" + arr;
}
Kata10();


function Kata11 ()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   document.getElementById("K11").innerHTML = "Katas11= " + arr;
}
Kata11();


function Kata12 ()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let Solution = [];
   for (i = 0; i < arr.length; i++)
   {
       if(arr[i]%2 == 0)
       {
           Solution.push(" "+ arr[i]);
       }
   }
   document.getElementById("K12").innerHTML = "Katas12=" + Solution;
}
Kata12();


function Kata13 ()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let Solution = [];
   for (i = 0; i < arr.length; i++)
   {
       if(arr[i]%2 == 1)
       {
           Solution.push(" "+ arr[i]);
       }
   }
   document.getElementById("K13").innerHTML = "Katas13=" + Solution;
}
Kata13();


function Kata14 ()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let Solution = []
   for (i = 0; i < arr.length; i++)
   {
       Solution.push(" "+ arr[i]*arr[i]);
   }
   document.getElementById("K14").innerHTML =  "Katas14=" + Solution;
}
Kata14();


function Kata15()
{
   let sum = 0;
   for (i=0; i <=20; i++)
   {
       sum += i;
   }
   document.getElementById("K15").innerHTML = "Katas15= " + sum;
}
Kata15();


function Kata16()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let sum = 0;
   for (i=0; i < arr.length; i++)
   {
       sum += arr[i];
   }
   document.getElementById("K16").innerHTML = "Katas16= " + sum;
}
Kata16();


function Kata17()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let sum = Math.min(...arr);
   document.getElementById("K17").innerHTML = "Katas17= " + sum;
}
Kata17();


function Kata18()
{
   let arr = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];
   let sum = Math.max(...arr);
   document.getElementById("K18").innerHTML = "Katas18= " + sum;
}
Kata18();

    
   // writeToPage("kata #11 ", sampleArray ) 