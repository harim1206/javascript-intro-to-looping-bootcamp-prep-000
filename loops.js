/*
TODO: Build a function forLoop. It takes an array as an argument.
 Start counting from 0, and, using a for loop, add a string to the array 25 times.
  But not just any string. If your i value is 1, add the string "I am 1 strange loop.";
  if your i value is anything else, add the string "I am ${i} strange loops.".
  (Remember flow control with if and else? And how do we interpolate i?) Then return the array.
*/

function forLoop(arr){

  for(i=0; i<=25; i++){
    if(i===1){
      arr[i] += `I am ${i} strange loop.`
    }else{
      arr[i] += `I am ${i} strange loops.`
    }
  }

  return arr
}


function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop(arr){

  do{
    arr.pop()
  }while(maybeTrue() && arr.length>0)

  return arr
}
