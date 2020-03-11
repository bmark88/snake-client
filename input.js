const stdin = process.stdin;

let connection;

const setupInput = (conn) => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  connection = conn;
};

const handleUserInput = () => {
  stdin.on('data', (key) => {
    if (key === '\u0003') { // allows ctrl + C to exit the game
      process.exit();
    } else if (key === '\w') {
      setInterval(() => {connection.write('Move: up')}, 50); // move up command
    } else if (key === '\a') {
      setInterval(() => {connection.write('Move: left')}, 50); // move left command
    } else if (key === '\s') {
      setInterval(() => {connection.write('Move: down')}, 50); // move down command
    } else if (key === '\d') {
      setInterval(() => {connection.write('Move: right')}, 50); // move right command
    } else if (key === '\q') {
      connection.write("Say: ¿y so glitchy¿");
    }
  })
};

module.exports = {
  setupInput,
  handleUserInput,
  connection
};