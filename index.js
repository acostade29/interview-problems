//1 Fizzbuzz Question//
//time complexity linear on notation because we are looping on each of the numbers

// Prin the numbers from 1 to 100 and for multiples of '3' print "Fizz" instead of the number and for the multiples of '5' print "Buz"//

// Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,//
// Buzz, 11,Fizz, 13, 14, Fizz buzz,16 ,17 ...


//Speudocode//

// we need to loop from 1 to 100 and check using module operator



//lopping with a for loop from 1 to 100 
for (count =1 ; count <= 100; count++)

//use module operator to check the values % are multiples of 3 - 5 - or not 


//multiples of both 3 or 5 Fizzbuzz
{
  if (count % 15 == 0)
{
  console.log("Fizzbuzz");
  }

  //multiples of  5 buzz
  else if (count % 5 == 0)
  {
  console.log("Buzz");
  }

  //multiples of  3 Fizz
  else if (count % 3 == 0)
  {
  console.log("Fizz");
}
else 

//no multiples 
{
  console.log(count);
}
}





//REVERSE Words in A String 


//Given an input string, reverse the string word by word
//Input: "reverse words in a string"
//Output: "String a in words Reverse"


//Speudocode


// use a split the input at all of the spaces to make an array of strings instead one big string 
// go backwards throught the array and add each word backwards to a new string and reverse 

//create a function called reverse string that takes in s as the string and then is going to store the reverse string 

function reverseString(s)
{
  //is going to be an empty string since is the initial statement
  var reversedString = "";

  //input empty string 

  var inputString =s.split(" ");

  for (var i = inputString.length -1 ;
  i >=0 ; i--)
  {
    reversedString += inputString[i] + " ";
  } 

console.log("reversed String")
console.log(reversedString);
}

reverseString("hellooo im baby baba boo")


//ROtae an array of n elements to the left by k steps. 
//input: [1,2,3,4,5,6,7]
//Ouput: [3,4,5,6,7,1,2]


let leftRotate = (array,k) => {
  if ( k< array.length) {
    
    array.unshift(...array.splice(k));

  } else {
    let i =0;
    while (i< k) {
      array.unshift(array.splice(-1));
      i++;
    }
  }


return array;
}
let array = [1,2,3,4,5,6,7];
let k = 2
console.log(leftRotate(array,k));



// given tow strings a and b, determine if they are isomorphic (corresponding or similar in form and relations.//
// having the same crystalline form.)

// Input: "abc" "def"
// Ouput: true

// input: "aa"
// output: false


// 1 be sure the strings have the same lenght as part of condition to be isomorphic

//use amap  to be able to locate the order of the string 

//use a for loop and if 

//check with both caracter are equal to do the comparation 

let areIsomorphic = (string1, string2) => {
  var hashMap = {} ;

  if (string1.length !== string2.length) 
 { 
   return false; 
 }

  for( var index = 0; index < string1.length; index++)
{
var character1 = string1[index];
var character2 = string2[index];
}

if (!hashMap[character1])
{
  hashMap[character1] = character2;
}
else if (hashMap[character1] !== character2 )
{
  return false;
}

return true; 
}


console.log(areIsomorphic("abc", "def"))

console.log(areIsomorphic("aa" , "ab"))






// set Matrix to cero 
// Given a 2d matrix, if an element is 0, set its entire row and colum to 0. Do it in a place 

//INput
// [[1,1,0,1]],
// [[1,1,1,0]]
// [1,1,0,1]


// Output:
// [[0,0,0,0],
// [0,0,0,0]
// [0,0,0,0]];

function setZeros (matrix) {
 
 for (var row = 0; row < matrix.length; row++) {
     for (var column = 0; column < matrix[0].length; column++)
     {

       if (matrix[row][column] === 0 && 1/matrix[row][column] === Infinity)
       {
         for (var x = 0; x < matrix.length; x++)
         {
           matrix[x][column] = matrix[x][column] && -0;
         }
         for (var y = 0; y < matrix[0].length; y++)
         {
           matrix[row][y] = matrix[row][y] && -0;
         }
       }
     }
  }
 }

 function printMatrix (matrix)
 {
   for (var row = 0; row < matrix.length; row++)
   {
     var x = "";
     for (var column = 0; column < matrix[0].length; column++)
     {
       x += matrix[row][column];
     }
     console.log(x);
   }
 }

 var matrix = [[1, 1, 0, 1], [1, 1, 1, 0], [1, 1, 0, 1]];
 setZeros(matrix);
 printMatrix(matrix);

 var matrix2 = [[1, 1, 1, 1], [1, 1, 1, 0], [1, 1, 1, 1]];
 setZeros(matrix2);
 printMatrix(matrix2);
