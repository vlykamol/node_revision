const http = require('http')
const fs = require("fs");
const { json } = require('stream/consumers');



const server = http.createServer( (req, res) => {
  
  const log = `${Date.now()}: ${req.url} New req received \n`;
  fs.appendFile("log.txt", log, (err, data) => {
    res.end("Hello from server");
  })

});


server.listen(8000, () => {
  console.log("server listning...")
})

console.log("hello from server")