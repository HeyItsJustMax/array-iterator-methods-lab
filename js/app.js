// Some data we can work with
const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's.

const onlyBornInFif = inventors.filter(function(inventor) {
  return inventor.year >= 1500 && inventor.year <= 1599
})

console.log("only born in 1500s", onlyBornInFif)


// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties.

const firstLast = inventors.map(function(inventor) {
  return {first: inventor.first , last: inventor.last}
})
 
console.log("just first and last names", firstLast) 

// 3. Sort the inventors by birthdate, from those born furthest in the past to those born most recently.

const sortByBirth = inventors.sort(function(a, b) {
  return a.year - b.year
})

console.log("sorted from youngest to oldest", sortByBirth) 

// 4. Sort the inventors by years lived from shortest to longest-lived.

const sortByAgeAtDeath = inventors.sort(function(a, b){
  return (a.passed - a.year) - (b.passed - b.year)
})

console.log("sort  shortest to longet lived", sortByAgeAtDeath)
// Array.prototype.reduce()
// 5. Find how many years all the inventors lived combined.

const allYearsLived = inventors.reduce(function(total, inventor){
    return total + (inventor.passed - inventor.year)
  }, 0)

console.log("How many years all inventors lived", allYearsLived)

//just writing this to help me break up problems 5. and 6.

const people = [
  'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
  'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
  'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
  'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
  'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
  'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
  'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
  'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
  'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
  'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
  'Blake, William'
];

// Array.prototype.map()
// 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".

const formFirstLast = people.map(function(person){
    return person.split(',').reverse().join(" ")
})

console.log("Formatted 'First Last'", formFirstLast)


//Just writing this to break up problems 6 and 7

const data = [
  'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
  'bike', 'walk', 'car', 'van', 'car', 'truck'
];

// Array.prototype.reduce()
// 7. Count the number of instances for each of the data items.
// Hint: Return an object where the keys are 'car', 'truck', etc., and the value is the total number of times each data item appears.

const countInstances = data.reduce(function(acc, element){
  if(acc[element]) {
    acc[element]++
  } else {
    acc[element] = 1
  }
    return acc
}, {})

console.log("# of instances", countInstances)  //AS SEEN BELOW I WAS ONLY ABLE TO GET THIS FROM LOOKING AT HUNTER'S POST IN THE ENGINEERING SLACK CHANNEL - I was having a difficult time following along with Jon in the lecture video 


// const instances = data.reduce((acc, element) => {
//   if (acc[element]) {//if this key already exists, increment its corresponding value by 1
//     acc[element]++
//   } else { //otherwise, create this key, and set its value to 1
//     acc[element] = 1
//   }
//   return acc
// }, {}) //set the initial value of the acc to an empty object
// console.log('Instances', instances) // Instances { car: 5, truck: 3, bike: 2, walk: 2, van: 2 }
//Just writing this to break up problems 7 and 8

const devs = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];


// Array.prototype.some()
// 8. Check if at least one person is 19 or older.

const nineteenOrOlder = devs.some(function(dev){
  return 2021 - dev.year >= 19
})

console.log("if someone is older than 19", nineteenOrOlder)

// Array.prototype.every()
// 9. Check if everyone is 19 or older.

const allNineteenOrOlder = devs.every(function(dev){
  return 2021 - dev.year >= 19
})

console.log("if everyone is older than 19", allNineteenOrOlder)

//Just writing this to break up problems 9 and 10

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

// Array.prototype.find()
// 10. Find the comment with the id of 823423.

const find823423 = comments.find(function(comment){
  return comment.id === 823423
})

console.log("find comment with id 823423", find823423)

// Array.prototype.findIndex()
// 11. Find the index of the comment with an id of 123523.

const findIndOf123523 = comments.findIndex(function(comment){
  return comment.id === 123523
})

console.log("index of comment with id 123523:", findIndOf123523)