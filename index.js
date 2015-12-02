#!/usr/bin/env node
var exec = require('child_process').exec;
var path = require('path');

var relPath = __dirname + '/make-me-lol.js';
relPath = relPath.replace(/\\/g, '/');

exec('node --harmony ' + relPath, function(error, stdout, stderr) {
    console.log(stdout);
    console.error(stderr);
    if (error) {
        console.error(error);
    }
});
