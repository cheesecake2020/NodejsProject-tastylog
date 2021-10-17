const log4js = require("log4js");
const config = require("../../config/log4js.config.js");
var console, application, access;

log4js.configure(config);

// Console Logger.
console = log4js.getLogger();
// Applicarion Logger
application = log4js.getLogger("application");
// Access logger
access =log4js.getLogger("access");


module.exports = {
    console,
    application,
    access
};