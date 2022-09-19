// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.



// --------------------1) What will this log?
const cohort = "Foxtrot 2022"
console.log(cohort.split(""))

// a) Your answer:  ['F','o','x','t','r','o','t',' ','2','0','2','2']
// b) Verify and explain: Console log displayed my answer because const cohort is a variable containing a string and by using the .split() method with no space between the quotes inside of the method, it will convert the string into an array populating every index with a character of the string including space.



// --------------------2) What will this log?
const greeter = (name) => {
  `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer:  undefined
// b) Verify and explain: Console log displayed my answer because the inside of the function greeter there is no return statement to display the string interpolation correctly. 'Hello, LEARN Student!'



// --------------------3) What will this log?
const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer:  [8, 10, 12, 14, 16]
// b) Verify and explain: Console log displayed my answer because the map() method will iterate the original array and output a new array with the same length as the original populating the index with original value times 2 into the new array.



// --------------------4) What will this log?
const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer:  [11, 13, 15]
// b) Verify and explain: Console log displayed my answer because the filter() method will only return a subset of the original array that matches your parameters. In this situation we want to return odd numbers only.



// --------------------5) What will this log?
const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:  "JavaScript"
// b) Verify and explain: Console log displayed my answer because we know what the object myCodingSkills has as key/pair properties. Using dot notation, myCodingSkills.langauges[0] will access the obj -> key -> index.



// --------------------STRETCH: What will this log?
class Learn {
  constructor(name) {
    this.student = name,
    this.cohort = "Foxtrot",
    this.year = 2022
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer:  LEARN = {
//                            student: 'George',
//                            cohort: 'Foxtrot',
//                            year: 2022
//                                                }
// b) Verify and explain: Console log displayed my answer because the class Learn is used as a template to create an object with student, cohort, and year key/value pairs. Using const learnStudent = new Learn('George') will create a new object using the class Learn template and prepopulate all the defaults besides the student being used as an arguement.
