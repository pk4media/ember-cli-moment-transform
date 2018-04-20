# Ember-cli-moment-transform

[moment.js](momentjs.com) attribute transformers for ember data [![Build Status](https://travis-ci.org/pk4media/ember-cli-moment-transform.svg?branch=master)](https://travis-ci.org/pk4media/ember-cli-moment-transform) [![Circle CI](https://circleci.com/gh/pk4media/ember-cli-moment-transform/tree/master.svg?style=svg&circle-token=2c626fad51fa0856a87784cff81ba504cc0e4cc3)](https://circleci.com/gh/pk4media/ember-cli-moment-transform/tree/master)

## Usage

* `ember install ember-cli-moment-transform`

Use local browser timezone
```javascript
foo: DS.attr('moment')
```

Use UTC instead of local browser timezone
```javascript
foo: DS.attr('moment-utc')
```

## Development

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
