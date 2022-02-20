const os = require("os")
const types = require("./types.js");

class Debug {

    constructor(types) {
        this.types = types;
    }

    logMssage(message, typename) {
        const usingType = types.find((type) => type.name === typename);
        usingType.exec(message);
    }

    info(message) {
        this.logMssage(message, 'info');
    }

    warning(message) {
        this.logMssage(message, 'warning');
    }

    error(message) {
        this.logMssage(message, 'error');
    }

    success(message) {
        this.logMssage(message, 'success');
    }
}

module.exports = Debug;