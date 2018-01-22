
const fs = require('fs')

/* Write file */
// fs.writeFile('./test.txt', 'Que tiro foi esse?', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })
// const writeFile = fs.writeFileSync('./test.txt', 'Que tiro foi esse?')
// console.log(writeFile)


/* Read file */
// fs.readFile('./test.txt', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })
// const readFile = fs.readFileSync('./test.txt')
// console.log(readFile)

/* Append File */
// fs.appendFile('./test.txt', '\nHmmm', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)  
// })
// const appendFile = fs.appendFileSync('./test.txt', '\nHmmm')

/* Copy file - Node 8.5+ */
// fs.copyFile('./test.txt', 'dest/test.txt', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })
// const copyFile = fs.copyFileSync('./test.txt', 'dest/test.txt')
// console.log(copyFile)

/* Rename a file */
// fs.rename('./test.txt', 'baileDeFavela.txt', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })
// const rename = fs.renameSync('./test.txt', 'baileDeFavela.txt')

/* Delete a file */
// fs.unlink('./baileDeFavela.txt', (err, data) => {
//   if (err) return console.log(err)
//   console.log(data)
// })
// const unlink = fs.unlinkSync('./baileDeFavela.txt')
// console.log(unlink)