
const Logger = require('./logger');

const logger = new Logger();

logger.on('messageLogged', (arg)=>{
    console.log('Litener called', arg);
});

logger.log('Message is logged');