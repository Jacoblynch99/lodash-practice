const _ = require("lodash")

// eslint-disable-next-line prettier/prettier
let numberedArray = [
  1,
  2,
  3,
  -5,
  -2,
  -2,
  4,
  1,
  -2,
  3,
  -2,
  4,
  -1,
  5,
  -7,
  2,
  3,
  4,
  6,
  -9,
  9,
  -10,
  11,
  12,
  -1,
  6,
  4,
  -4,
]

let uniqIdNormal = []

let uniqIdLodash = []

let paulMcCartney = _.castArray([
  "You",
  "Say",
  "Goodbye",
  "And",
  "I",
  "Say",
  "Hello",
]) // _.castArray creates an array

const uniqueId = () => {
  for (i = 0; i <= 10; i++) {
    uniqIdNormal.push(_.uniqueId("id_"))
  }
} // CREATES IDS
uniqueId()
console.log(uniqIdNormal) // console logs all new ids generated

console.log(_.chunk(numberedArray, 2)) // breaks down a larger into array that can only contain a certain amount
console.log(_.reverse(numberedArray)) // arranges the array in reverse
console.log(_.without(numberedArray, -10, -9, -7, -5, -4, -3, -2, -1)) // removes selected values from array if present
console.log(_.shuffle(numberedArray)) // arranges array in a random order
console.log(
  _.times(2, function () {
    return numberedArray + 2
  })
) // ITS A FOR LOOP!!!! EPIC

_.times(10, function () {
  uniqIdLodash.push(_.uniqueId("id_"))
}) // LODASH FUSION, AND KEEPS TRACK OF CURRENT ID NUMBER

console.log(uniqIdLodash) // the continued _.uniqueId ids from 12 to 21
console.log(_.random(0, 100000)) // generates a random number between two given numbers
console.log(paulMcCartney) // console logging _.castArray which creates an array
console.log(_.shuffle(paulMcCartney)) // shuffles an array
console.log(_.eq(paulMcCartney, _.shuffle(paulMcCartney))) // checks if two arrays are equal and shuffles the right array
console.log(_.gte(40, 10)) // Compares if 40 (value) is bigger than 10 (other)
console.log(`${_.now()} milliseconds have passed since the Unix epoch!`) // Grabs current milliseconds
console.log(_.size(numberedArray)) // returns the number of values from an array
//