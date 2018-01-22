const fs = require('fs')

// Asynchronous read
fs.readFile('./test.txt', (err, data) => {
  if (err) return console.error(err)
  console.log('Asynchronous read: ' + data.toString())
})

// Synchronous read
var data = fs.readFileSync('./test.txt')
console.log('Synchronous read: ' + data.toString())

console.log('Program Ended')