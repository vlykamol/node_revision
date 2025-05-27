const http = require('http')

const server = http.createServer( (req, res) => {
  console.log("new req received.")

  res.end("Hello from server");
});


server.listen(8000, () => {
  console.log("server listning...")
})

console.log("hello from server")