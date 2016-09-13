"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _immutable = require("immutable");

var RuleMap = function RuleMap(rules_param) {
  var rules = rules_param || (0, _immutable.Map)({});

  function _valuesToKey(left_top, center_top, right_top) {
    var left_top_key = left_top ? "1" : "0";
    var center_top_key = center_top ? "1" : "0";
    var right_top_key = typeof right_top === "boolean" ? right_top ? "1" : "0" : "";

    return left_top_key + center_top_key + right_top_key;
  }

  function addRule() {
    var _arguments = arguments;

    var _apply = function () {
      if (_arguments.length === 4) {
        return _arguments;
      }
      return [_arguments[0], _arguments[1], undefined, _arguments[2]];
    }.apply(undefined, arguments);

    var _apply2 = _slicedToArray(_apply, 4);

    var left_top = _apply2[0];
    var center_top = _apply2[1];
    var right_top = _apply2[2];
    var self = _apply2[3];


    var key = _valuesToKey(left_top, center_top, right_top);
    var new_rules = rules.set(key, self);
    return RuleMap(new_rules);
  }

  function getValue(left_top, center_top, right_top) {
    var key = _valuesToKey(left_top, center_top, right_top);
    return rules.get(key);
  }

  function toString() {
    return JSON.stringify(rules.toObject());
  }

  return { addRule: addRule, getValue: getValue, toString: toString };
};

exports.default = RuleMap;