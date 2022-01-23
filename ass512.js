// Taking string or word from the user 
var word1 = prompt("enter the string 1");
var word2 = prompt("enter the string 2");
// function to check anagram 
function anagram(a, b) {
     word1 = a.length;
     word2 = b.length;
    //  check if both the lengths matches or not
    if(word1 !== word2){
      //  if length does not match print lenghtn does not match
       document.write("Length does not match");
       return ;
    }
    // using split sort and join 
    word1 = a.split('').sort().join('');
    word2 = b.split('').sort().join('');
   //  if length matches then after spliting , sorting , and join than check the below Condition
     if(word1 === word2){
         // if matches than it is anagram
       document.write("Is a anagram");
    } else { 
      // if matches than it is  not anagram
       document.write("Is a not  a anagram");
    }
 }
//  calling function
 anagram(word1,word2);
