'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleMap = require('../../../RuleMap/RuleMap');

var _RuleMap2 = _interopRequireDefault(_RuleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _RuleMap2.default)().addRule(false, false, false, false).addRule(false, false, true, true).addRule(false, true, false, false).addRule(false, true, true, true).addRule(true, false, false, false).addRule(true, false, true, true).addRule(true, true, false, false).addRule(true, true, true, true).addRule(false, false, false).addRule(false, true, true).addRule(true, false, false).addRule(true, true, true);