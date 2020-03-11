const { connect } = require('./client');
const { setupInput } = require('./input');
const stdin = process.stdin;
console.log('Connecting ...');

connect();
setupInput();