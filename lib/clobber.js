#!/usr/bin/env node
/*
 * clobber
 * http://github.com/stanzheng/clobber
 *
 * Copyright (c) 2014 stanley zheng
 * Licensed under the MIT license.
 */

'use strict';

var fs = require('fs');
var cli = require('commander');
var exec = require('child_process').exec;
var path = require('path');
var template = require('./template_package.json');
global.appRoot = path.resolve(__dirname);

cli
  .version('0.0.1')
  .option('--sd, --save-dev', 'Add all to save developer dependencies')
  .option('--s, --save', 'Add all to dependencies')
  .parse(process.argv);

fs.exists(global.appRoot + '/package.json', function (exists) {
  console.log(global.appRoot + '/package.json');

  if(exists) {

  }
  else {

  }
  exec('node ' + cli.args[0], function callback(error, stdout, stderr){
      // result
      var pm;
      console.log(stdout);
      pm = stderr.match(/'(.*?)'/)[1];
      console.log(template);

      exec('npm install ' + pm , function callback(error, stdout, stderr){
        console.log(stdout);
        console.log(stderr);
      });
  });

});
