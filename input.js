const stdin = process.stdin;

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

handleUserInput();

module.exports = {
  setupInput,
  handleUserInput
};