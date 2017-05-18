'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _solution2 = require('../solution');

var _solution3 = _interopRequireDefault(_solution2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var title = 'Problem 1 : Multiples of 3 and 5';
var description = 'If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. \nThe sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.';

var _class = function (_solution) {
	_inherits(_class, _solution);

	function _class() {
		_classCallCheck(this, _class);

		return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, title, description));
	}

	_createClass(_class, [{
		key: 'solve',
		value: function solve() {
			var i = 1;
			var sum = 0;
			while (i < 1000) {
				if (i % 3 === 0 || i % 5 === 0) {
					sum += i;
				}
				i++;
			}
			return sum;
		}
	}]);

	return _class;
}(_solution3.default);

exports.default = _class;