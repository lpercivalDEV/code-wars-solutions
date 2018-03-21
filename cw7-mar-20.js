//codewars solution #2  --> March 20 2018

//Write function avg which calculates average of numbers in given list.



function find_average(num) {
  // first we set up a variable to hold the sum
  //...of all the elements in the array
  let sum =0;

  //now we make a loop to cycle through the elements in
  //...the array. As long as i is not the last element
  //...in the array, the loop will continue to
  //...cycle through the array.
  for (let i=0; i < num.length;i++){

  //The elements in the array are then added to
  //...the stored value in the variable called sum
    sum += num[i];
  }
  //here we create a variable to hold the value of
  //...the average of the numbers in the array
 let average = (sum/num.length);

  //finally we return the average :D
  return average;
}
