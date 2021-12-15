var array1 =["one","two","theee","four",5,6];
var array2 = new Array("one,two");
// empty array
var myList=[];
var myList=[1,2,3,4,"one"];
console.log(array1[5]);
array1.push('seven');  //push
console.log(array1);
array1.unshift("zero"); ///unshift
console.log(array1);
array1[2]="new element";   // to add at a particular position
console.log(array1);   
array1.pop();             //pop
console.log(array1);
console.log(array1.length); //length