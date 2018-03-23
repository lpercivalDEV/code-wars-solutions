function sortArray(array) {
  // Return a sorted array.
  // we will need three arrays - one for evens, one for odds,one for empty, and one to hold all sorted values in the end
  //first we need to set up variables to hold our different arrays

  const even = [];
  const odd = [];
//   let empty = [];
  const final =[];

  //now we need a loop to cycle through any array we're given
  for(let i =0; i < array.length; i+=1){
    //we need a case for even elements in the array so we'll set up a conditional
    if(array[i]%2 === 0){
      even.push(array[i]);
    //the only other option is that the elements are odd so we set up the else for that
    }else{
      odd.push(array[i]);
    }
  }

  //now we need to sort the array holding all the odd elements
  // this function will sort the elements
  odd.sort((a,b) => a - b);

  //now we need another loop to cycle through the arrays and shift elements out
  // use the shift() method for this
  for(let i=0;i<array.length;i+=1){
    if(array[i]%2 ===0){
      final.push(even.shift());
    }else{
      final.push(odd.shift());
    }

  }
//make sure to return the finalized array outside of your loop but still inside the function
return final;
}
