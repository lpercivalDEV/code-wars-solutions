//Code wars solution for 3/14/18.

function even_or_odd(number) {
//this conditional takes the argument that will be passed into the even_or_odd function and says
  //...if the number divided by two gives you no remainder, then it must be even so return "Even"
  if(number%2 == 0){
    return "Even"
  }
  //this conditional states that for any other scenario, the argument passed through the
    //...function must be odd and to return "Odd"
  else{
    return "Odd"
  }
}
