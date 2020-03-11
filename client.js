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
  
  // notifies us when our connection is established, and writes to server
  conn.on('connect', () => {
    console.log('Successfully established connection');
    conn.write('Name: BM  ') // writing to server our username (3 characters or less)
    // conn.write('Move: up'); // move up command
    // conn.write('Move: down'); // move down command
    // conn.write('Move: left'); // move left command
    // conn.write('Move: right'); // move right command

    // setInterval(() => {conn.write('Move: up'), 50}) // automatically moves up every 50ms
  })

  // event listener to read what the server is sending us
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  return conn;
}
  
module.exports = { connect };