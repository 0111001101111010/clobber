//#/usr/bin/node
/*
 * clobber
 * http://github.com/stanzheng/clobber
 *
 * Copyright (c) 2014 stanley zheng
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var c = require('commander');
var exec = require('child_process').exec;

// exports.awesome = function() {
//   return 'awesome';
// };

exec('node test.js', function callback(error, stdout, stderr){
    // result
    console.log(stdout);
    console.log(stderr);
});
