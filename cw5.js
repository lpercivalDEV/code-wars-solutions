/*
Kata Task
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

humanYears >= 1
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
References

http://www.catster.com/cats-101/calculate-cat-age-in-cat-years
http://www.slate.com/articles/news_and_politics/explainer/2009/05/a_dogs_life.html
*/

//======ACTUAL CODE SOLUTION==============//

//the variable 'animalYears' holds the value of a function that calculates the ages (arrow notation)
const animalYears = (humanYears, animal) => {
  let years = 0
  //this variable holds the conditionals for cat and dog where the years are added depending on what humanYears value is
  const increment = animal === 'cat' ? 4 : animal === 'dog' ? 5 : 0
  //this is a loop that increments i based on the age criteria in the instructions and stores them in the variable 'years'
  for (let i = 0; i <= humanYears; i++) {
    if (i === 1) years += 15
    if (i === 2) years += 9
    if (i > 2) years += increment
  }
  //the value of years is returned and depends on which condition was met
  return years
}
//finally, this variable holds the function (arrow notation) 'humanYears' which will spit out the years for dog cat and human into an array
const humanYearsCatYearsDogYears = humanYears => [
  humanYears,
  animalYears(humanYears, 'cat'),
  animalYears(humanYears, 'dog'),
]
