/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-moment-transform',

  included: function included(app) {
    this.app = app;

    this._super.included(app);

    app.import(app.bowerDirectory + '/moment/moment.js');

    app.import(app.bowerDirectory + '/ember-cli-moment-shim/moment-shim.js', {
      exports: {
        moment: ['default']
      }
    });
  }
};
