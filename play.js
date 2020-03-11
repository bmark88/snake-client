const { connect } = require('./client');
const stdin = process.stdin;
console.log('Connecting ...');

const setupInput = () => {
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
};

const handleUserInput = () => {
  stdin.on('data', (key) => {
    if (key === '\u0003') { // allows ctrl + C to exit the game
      process.exit();
    }
  })
};

connect();
setupInput();
handleUserInput();