const pool = require("./pool.js");

var Transaction = class {
    constructor(connection) {
        this.connection = connection;
    }
    async begin() {
        
    }
    async executeQuery(query, values, option = {}) {
        
    }
    async commit() {
        
    }
    async rollback() {
        
    }
};

module.exports = Transaction;