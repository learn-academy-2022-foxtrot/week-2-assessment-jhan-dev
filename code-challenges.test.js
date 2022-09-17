// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// --------------------1) Create a function that takes an object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

//Declare test function with describe, and pass a perimeter that doesn't exist yet
describe('divisibleByThree', () => {
    //Set an it function that will display the purpose of the describe function
    it('Function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not', () => {

        //Show case all 3 test inputs
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"

        //Test and check strictly equals for object2
        expect(divisibleByThree(object1)).toEqual(`${object1.number} is divisible by three`)

        //Test and check strictly equals for object1
        expect(divisibleByThree(object2)).toEqual(`${object2.number} is divisible by three`)

        //Test and check strictly equals for object3
        expect(divisibleByThree(object3)).toEqual(`${object3.number} is not divisible by three`)
    })
})
//ReferenceError: divisibleByThree is not defined

// b) Create the function that makes the test pass.

//Create the function we are testing which is divisibleByThree with an object parameter
const divisibleByThree = (obj) => {
    //Make a conditional that if the obj number modulo 3 stricly equals 0
    if (obj.number % 3 === 0) {
        //return that the obj number is divisible by three
        return `${obj.number} is divisible by three`
    }
    //Else if the obj number modulo 3 does NOT stricly equals 0
    else if (obj.number % 3 !== 0) {
        //return that the obj number is not divisible by three
        return `${obj.number} is not divisible by three`
    }
}
// divisibleByThree
//     ✓ Function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.172 s, estimated 1 s
//------------------------------------



// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

//Declare test function with describe, and pass a perimeter that doesn't exist yet
describe('capFirst', () => {
    //Set an it function that will display the purpose of the describe function
    it('function that takes in an array of words and returns an array with all the words capitalized', () => {

        //Show case all 2 test inputs
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        
        // a) Create a test with expect statements for each of the variables provided.

        //Test and check strictly equals for randomNouns1
        expect(capFirst(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])

        //Test and check strictly equals for randomNouns2
        expect(capFirst(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})
//ReferenceError: capAll is not defined

// b) Create the function that makes the test pass.

//Create the function we are testing which is capAll with an array parameter
const capFirst = (array) => {
    //iterate the array to look at each word/string in each index
    //create const variable to hold result
    //use charAt() to grab first char of word and use toUpperCase() to capitalize it. After that 
    //we will concat the capitalized word with the rest of the letters as lower cases using + slice(1)
    //to leave the first char alone and combine all of it together.
    const capF = array.map((value) => value.charAt(0).toUpperCase() + value.slice(1).toLowerCase())
    //return the result held in capF
    return capF
}
// capFirst
//     ✓ function that takes in an array of words and returns an array with all the words capitalized

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.156 s, estimated 1 s
//------------------------------------



// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.

//Declare test function with describe, and pass a perimeter that doesn't exist yet
describe('indexOfFirstVowel', () => {
    //Set an it function that will display the purpose of the describe function
    it('function that takes in a string and logs the index of the first vowel', () => {
        
        //Show case all 3 test inputs
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        

        //Test and check strictly equals for vowelTester1
        expect(indexOfFirstVowel(vowelTester1)).toEqual(1)
        
        //Test and check strictly equals for vowelTester2
        expect(indexOfFirstVowel(vowelTester2)).toEqual(0)
        
        //Test and check strictly equals for vowelTester3
        expect(indexOfFirstVowel(vowelTester3)).toEqual(2)
    })
})
// ReferenceError: indexOfFirstVowel is not defined


// b) Create the function that makes the test pass.

//Create a function that takes in a string and logs the index of the first vowel
const indexOfFirstVowel = (string) => {
    //create arr that holds vowels
    const vowels = ['a', 'e', 'i', 'o', 'u']
    //create for loop to iterate the given string
    for (let i = 0; i < string.length; i++) {
        //create variable for current char of string
        let currChar = string[i]
        //if anything in the vowels array is included inside of the current char
        if (vowels.includes(currChar)) {
            //return the iteration index of the vowel found in the string
            return i
        }
    }
}
// indexOfFirstVowel
//     ✓ function that takes in a string and logs the index of the first vowel
// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.153 s, estimated 1 s
// -----------------------------------