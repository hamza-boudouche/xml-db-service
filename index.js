const basex = require("basex")
const { jsToXml, xmlToJs } = require("./utils/xml/convert")
const functions = require("./users/functions")
const { validate } = require("./utils/xml/validate")

const http = require('http');
const app = require('./app');

const normalizePort = val => {
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
};

const port = normalizePort(process.env.PORT || '3000');
//Indiquer à notre application express sur quel port elle doit tourner.
app.set('port', port);

const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

//A l'intérieur de createServer() on met une fonction 
//qu'on veut qu'elle s'xecute à chaque fois on lance le serveur.
const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
  const address = server.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

server.listen(port);


// const client = new basex.Session("localhost", 1984, "admin", "admin");
// client.execute("create db test_db2", console.log);

// client.add("/etudiant/etudiant.xml", etudiant1XML, console.log);
// client.add("/etudiant/etudiant.xml", etudiant2XML, console.log);

// const doStuff = (err, xml) => {
// 	if (err !== null) console.log(err);
// 	console.log(`<root>${xml.result}</root>`)
// 	const obj = xmlToJs(`<root>${xml.result}</root>`);
// 	console.log("///")
// 	console.log(JSON.stringify(obj, null, 4))
// }

// client.execute("xquery /etudiant/name", doStuff);

// client.execute("drop db test_db2");

// client.close();
