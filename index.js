// const person = require('./person');
// console.log(person.name);
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', function (data) {
    console.log('Called Listener', data);
});

logger.log('Hello World');
logger.log('Hi');
logger.log('Hello');