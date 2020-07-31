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


//