var scriptjs = require('scriptjs');

scriptjs('modules.js', function() {

  var moduleA = require('module-a');
  var moduleB = require('module-b');

  moduleA();
  moduleB();
});