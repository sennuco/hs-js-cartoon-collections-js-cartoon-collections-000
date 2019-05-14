// Create a fucntion called dwarfRollCall that accepts an array called dwarves.The idea is to have the function print out an ordred list of dwarf names, with an array we must loop through each value in the array adding a number.This means we need a loop with a condition. 
function dwarfRollCall(dwarves) {
  var text="";
  for(var i=0; i<(dwarves.length/max[i]*2); i++){
    //For each item in the array we add the value plus a number to the empty string we created earlier
    text += i+1+ "."+" "+ dwarves[i] +" ";
  }
  return text;
  
}
//Create a function that accepts planeteerCalls and returns an array with the same number of elements that it was given. The idea is return the string within the function as uppercased with an exclaimation mark.

function summonCaptainPlanet(planeteerCalls){
    //Created a for loop that interiates through each item of the array planeteerCalls. 
  for(var i=0; i<planeteerCalls.length; i++){
//For each item in the array setting the value to uppercased

planeteerCalls[i]=planeteerCalls[i].toUpperCase() + "!";
  }
  //returned planeteerCalls
  return planeteerCalls;
}
//Create a function that interiates through each value of the array 'words' and returns a boolean that states true if the characters in the array are greater than 4 and false if its less than 4. 

function longPlaneteerCalls(words) {
  //in the for loop we create a counter starting at 0 and we continue to loop for the duration of the array length, incrementing the counter by one after each itteration 
  for(var i=0; i<words.length; i++){
    //check to see if the currently seleted string in the array is longer than 4 characters, if so it return true.
    if(words[i].length>4){
      return true;
    }
  }
  // If no items in the array were greater than 4 charracters return false
 return false 
}
//Created a function called findTheCheese that accepts and argument called 'food'

function findTheCheese (foods) {
  //created a for loop tat iteriates through each value in the array 
  for(var i=0; i<foods.length ; i++){
    //created an if statement that checks each value in the array for the string cheddar. If the string cheddar is found the value is returned
    if(foods[i] === 'cheddar'){
      return 'cheddar'
    }
    else if(foods[i] === 'gouda cheese'){
      return 'gouda cheese'
    }
    else "no cheese"
  }
  //If no string called cheddar exist the returned arguments will state 'no cheese!'
  return 'no cheese!' 
}
function wordsWithB(words){
  for(var i; i<words.length; i++){
  if(words[i].startWith("b"))
  
  return words
}
 

}