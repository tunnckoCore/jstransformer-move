# jstransformer-move [![The MIT License][license-img]][license-url]

[Move](https://github.com/rsms/move) support for [JSTransformers][jstransformers-url]

[![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url] [![npmjs.com][npmjs-img]][npmjs-url]


## Install
```
npm install jstransformer-move --save
```


## Usage
> For more use-cases see the **tests** in [test folder](./test) or see the [JSTransformer API](http://github.com/jstransformers/jstransformer#api) for more details.

```js
var move = require('jstransformer')(require('jstransformer-move'));

move.render('bar = ^{ 5 * Math.PI }').body
//=>
// (function(){"use strict";
//   var M, _MoveKWArgsT, Text, extend, create, print, repeat, after, JSON, __class, EventEmitter, bar;
//   M = Move.runtime, _MoveKWArgsT = M._MoveKWArgsT, Text = M.Text, extend = M.extend, create = M.create, print = M.print, repeat = M.repeat, after = M.after, JSON = M.JSON, __class = M.__class, EventEmitter = M.EventEmitter;
//   return bar = function bar() {
//     return 5 * Math.PI;
//   };
// })();
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/jstransformer-move/issues/new).


## License
[The MIT License][license-url]


[npmjs-url]: https://www.npmjs.com/package/jstransformer-move
[npmjs-img]: https://img.shields.io/npm/v/jstransformer-move.svg

[license-url]: ./LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/jstransformer-move
[travis-img]: https://img.shields.io/travis/tunnckoCore/jstransformer-move.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/jstransformer-move
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/jstransformer-move.svg

[david-url]: https://david-dm.org/tunnckoCore/jstransformer-move
[david-img]: https://img.shields.io/david/tunnckoCore/jstransformer-move.svg

[jstransformers-url]: http://github.com/jstransformers
