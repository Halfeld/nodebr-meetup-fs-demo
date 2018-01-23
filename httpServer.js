
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  fs.readFile('./test.txt', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500
      res.end(String(err))
      return
    }

    res.end(data)
  })
})

server.listen(5000)