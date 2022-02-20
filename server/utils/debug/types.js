const chalk = require("chalk");
const log_debug = console.log;

const types = [{
        name: 'info',
        color: 'blue',
        exec: (message) => { log_debug(chalk.blue(message)) }
    },
    {
        name: 'warning',
        color: 'yellow',
        exec: (message) => { log_debug(chalk.yellow(message)) }
    },
    {
        name: 'error',
        color: 'red',
        exec: (message) => { log_debug(chalk.red(message)) }
    },
    {
        name: 'success',
        color: 'green',
        exec: (message) => { log_debug(chalk.green(message)) }
    }
];

module.exports = types