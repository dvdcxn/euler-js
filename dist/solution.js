"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _class = function () {
	function _class(title, description) {
		_classCallCheck(this, _class);

		this.title = title;
		this.description = description;
	}

	_createClass(_class, [{
		key: "solve",
		value: function solve() {
			throw new Error("'" + this.title + "' did not implement solution.");
		}
	}]);

	return _class;
}();

exports.default = _class;