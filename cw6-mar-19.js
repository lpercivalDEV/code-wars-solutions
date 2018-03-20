
//======SQUARE EVERY DIGIT=========//

//Welcome. In this kata, you are asked to square every digit of a number.
//For example, if we run 9119 through the function, 811181 will come out,
//because 92 is 81 and 12 is 1.
//Note: The function accepts an integer and returns an integer


function squareDigits(num){
  //may the code be with you

  //first we want to change argument to a string so we can divide it up
  let digits = String(num);
  let final = "";

  // now that all items are split up, we can parse the digits and square each one
  for(let i =0; i < digits.length; i++){
    let power = parseInt(digits[i])*parseInt(digits[i]);
    final = final+String(power);
  }

    // finally we would parse the joined value to get it back to a number
  return parseInt(final);

















  /////===========CODE GRAVEYARD  :( =============/////

//   let digits = num.toString().split("");
//   console.log(digits);



//    for (var i = 0, len = digits.length; i < len; i++) {
//       console.log(Math.pow(digits[0 - len],2));
//     }

//       let last = digits.length-1;

//       for (i=0; i<last; i++) {
//         digits.out.println(strArray[i]);
//     }

//    digits.forEach(function (item) {
//       console.log(digits[0 - last]);
//     });

//   let integers = parseInt(breakUp,10);
//   console.log(integers);

//   let box = [];
//   box.push(breakUp);
//   console.log(box);
//   let num2 = breakUp.parseInt();
//   console.log(num2);

  // now we can return the all the squared digits back to string and use the join method



//   let final = Math.pow(num.split);
//   console.log(final);
}
