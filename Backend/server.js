const http = require('http'); // This is a built-in module that allows us to create an HTTP server
const app = require('./app'); // This is the Express app we created
const port= process.env.PORT || 3000; // This will read the port from the environment variables or use 3000 if it is not set

const server = http.createServer(app); 


server.listen(port,()=>{
  console.log(`Server is running on port ${port}`);

});