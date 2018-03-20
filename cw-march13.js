function tickets(peopleInLine){
  if(peopleInLine[0]<=25 && peopleInLine[1]<=50 && peopleInLine[0]<=peopleInLine[1]){
      return "YES"
  }
  else{
      return "NO"
  }
}
