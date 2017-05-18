'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (problems) {
	problems.forEach(function (problem) {
		console.log(('' + problem.title).cyan);
		console.log(('' + problem.description).gray);
		console.log('solving...'.yellow);
		try {
			var solution = problem.solve();
			console.log(('' + solution).green);
		} catch (err) {
			console.log(('Failed to solve \'' + problem.title + ', error encountered.').red);
			console.error(error);
		}
	});
};