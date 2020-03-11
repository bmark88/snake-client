const { connect } = require('./client');
const { setupInput, handleUserInput } = require('./input');
console.log('Connecting ...');

const connection = connect();
setupInput(connection);
handleUserInput();
