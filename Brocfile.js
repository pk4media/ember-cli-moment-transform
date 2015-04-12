/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

var app = new EmberAddon();

app.import(app.bowerDirectory + '/ember-cli-moment-shim/moment-shim.js', {
  exports: {
    moment: ['default']
  }
});

module.exports = app.toTree();
