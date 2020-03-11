const net = require('net');
const stdin = process.stdin;

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '10.0.2.15',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  
  // notifies us when our connection is established
  conn.on('connect', () => {
    console.log('Successfully established connection');
  })

  // writing to server our username (3 characters or less)
  conn.on('connect', () => {
      conn.write('Name: BM  ')
  })

  // event listener to read what the server is sending us
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}
  
module.exports = { connect };