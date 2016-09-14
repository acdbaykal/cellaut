"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require("immutable");

var POSSIBLE_NEIGHBOUR_STATES = [[true, true, true], [true, true, false], [true, false, true], [true, false, false], [false, true, true], [false, true, false], [false, false, true], [false, false, false]];

var POWERS_OF_TWO = [128, 64, 32, 16, 8, 4, 2, 1];

var RuleMap = function RuleMap() {
  var _arguments = arguments;

  function _valuesToKey(left_top, center_top, right_top) {
    var left_top_key = left_top ? "1" : "0";
    var center_top_key = center_top ? "1" : "0";
    var right_top_key = typeof right_top === "boolean" ? right_top ? "1" : "0" : "";

    return left_top_key + center_top_key + right_top_key;
  }

  //set initial rules
  var rules = function () {
    if (_arguments.length === 0) {
      return (0, _immutable.Map)({});
    } else {
      var param = _arguments[0];
      if (param instanceof _immutable.Map) {
        return param;
      } else if (typeof param === "number") {
        var rule_number = Math.round(param) % 256; //cut off anything larger than 255
        var result = {};
        var remain = rule_number;
        for (var i = 0; i < 8; i++) {
          var p = POWERS_OF_TWO[i];
          var int_div = Math.floor(remain / p); //0 or 1
          remain -= p * int_div;

          var neighbour_state = POSSIBLE_NEIGHBOUR_STATES[i];
          var key = _valuesToKey.apply(undefined, neighbour_state);
          result[key] = Boolean(int_div);
        }
        return (0, _immutable.Map)(result);
      }
    }
  }.apply(undefined, arguments);

  function setRule(left_top, center_top, right_top, self) {
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

  return { setRule: setRule, getValue: getValue, toString: toString };
};

exports.default = RuleMap;