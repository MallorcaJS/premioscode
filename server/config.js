'use strict';

/**
 * Global config settings.
 * (C) 2015 Diego Lafuente.
 */

 // requires
var Log = require('log');

// globals
exports.logLevel = 'info';
var log = new Log(exports.logLevel);

exports.expressPort = 8080;
exports.mongoConnection = 'mongodb://localhost/premioscode?autoReconnect=true&connectTimeoutMS=5000';
exports.testMongoConnection = 'mongodb://localhost/premioscodetest?autoReconnect=true&connectTimeoutMS=5000';

try {
    var localConfig = require('./local-config.js');
    for (var key in localConfig) {
        exports[key] = localConfig[key];
    }
} catch(exception) {
    log.notice('local-config.js not found');
}

