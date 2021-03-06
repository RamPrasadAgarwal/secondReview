const Hapi = require('hapi');
const Routes = require('./routes/index.js');

const server = new Hapi.Server();

server.connection({
  port: 1313,
  host: 'localhost',
});
server.route(Routes);

if (!module.parent) {
  server.start((err) => {
    if (err) throw err;
    console.log('Server started at port number 1313');
  });
}
module.exports = server;
