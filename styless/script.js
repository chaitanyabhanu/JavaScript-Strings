

//1.  Example  
// JavaScript string

let Example1 = '1.Example of Strings';    //  String Written inside quotes
document.getElementById("String1").innerHTML=Example1;

// 2.Example
// We Can Write String in a Single Quotes or Double Quotes
 let Example2 = "2.Example of String";
 document.getElementById("String2").innerHTML=Example2;

//  3.Example
// JavaScript Template Strings
let Example3 =`3.Example of "String" `;
document.getElementById("Example3T").innerHTML=Example3;


//4. Example 
// String Length
let text= 'Medidetty Bhanu Chaitanya';
document.getElementById("String LengthT").innerHTML=text
document.getElementById("String LengthN").innerHTML=text.length;

// Escape Characters

let Example4 =  " Escape Characters are are /'BHANU /' ";
document.getElementById("Escape Characters").innerHTML=Example4;

// Escape2  
let Example5= 'The escape sequence \' inserts a single quote in a string';
document.getElementById("Escape2").innerHTML=Example5;

// Escape3
let Example6 =  "The character \\ is called backslash.";
document.getElementById("Escape3").innerHTML=Example6;

// Breaking Long Lines
document.getElementById('Breaking Long Lines').innerHTML= "Example of  Breaking Long Lines";

// string addition
document.getElementById("String addition").innerHTML="Bhanu"+"Chaitanya";
