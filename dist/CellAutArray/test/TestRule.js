'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleMap = require('../../RuleMap/RuleMap');

var _RuleMap2 = _interopRequireDefault(_RuleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _RuleMap2.default)().setRule(false, false, false, false).setRule(false, false, true, true).setRule(false, true, false, false).setRule(false, true, true, true).setRule(true, false, false, false).setRule(true, false, true, true).setRule(true, true, false, false).setRule(true, true, true, true);