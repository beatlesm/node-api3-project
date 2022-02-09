// require your server and launch it
const server = require ('./api/server')
const {  PORT } = require('./secret')

server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`);
  });