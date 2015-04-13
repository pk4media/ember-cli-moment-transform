# Ember-cli-moment-transform

[moment.js](momentjs.com) attribute transformers for ember data

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
