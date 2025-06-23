//Question No 1
// Declare a variable called age & assign to it your age. Show
// your age in an alert box.
let age = 20;
alert('i am '+ age + ' years old' );

//Question No 2
// Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

let visitor ;
visitor = 14;
console.log('you have visited this page ',visitor ,'times');
alert('you have visited this page' + visitor +' times');

//Question No 3
// Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:\

let birthYear = 2000;
document.writeln('My birth year is', birthYear , '<br> data type of my variable is Number <br>');
alert(birthYear);


// Question No 4
// A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

let VisitorName = 'Jhone Doe'
let ProductTitle = 'T-shirt(s)'
let  Quantity = 5

document.writeln( '<b>',VisitorName,'</b>',' ordered ','<b>' ,Quantity ,'</b>' ,'<b>', ProductTitle ,'</b>' ,'on XYZ clothing store')