
const fs = require('fs')

/* Write */
const stream = fs.createWriteStream('stream-data.txt')
stream.write('Que tiro foi esse? mas agora com streams!')
stream.end()

/* Read */
const readableStream = fs.createReadStream('stream-data.txt', 'utf8')
readableStream.on('data', console.log)