'use strict';

var move = require('move');

exports.name = 'move';
exports.inputFormats = ['move'];
exports.outputFormat = 'js';

exports.render = move.compile;
