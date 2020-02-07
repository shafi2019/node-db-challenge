const server = require('./api/server');

const PORT = process.env.port || 5003;

server.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
}); 