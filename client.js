const net = require('net');
const { IP, PORT } = require('./constants');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  // notifies us when our connection is established, and writes to server
  conn.on('connect', () => {
    console.log('Successfully established connection');
    conn.write('Name: BM  ') // writing to server our username (3 characters or less)
  })

  // event listener to read what the server is sending us
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}
  
module.exports = { connect };