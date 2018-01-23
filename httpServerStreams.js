
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const stream = fs.createReadStream('./test.txt')

  stream.on('error', (err) => {
    res.statusCode = 500
    res.end(String(err))
    return
  })

  stream.pipe(res)
})

server.listen(5000)