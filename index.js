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
