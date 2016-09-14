"use strict";

var _chai = require("../../global/tests/chai");

var _RuleMap = require("../RuleMap");

var _RuleMap2 = _interopRequireDefault(_RuleMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-undef*/
describe("RuleMap", function () {
  describe("constuctor", function () {
    it("should accept 0 params", function () {
      var construct = function construct() {
        (0, _RuleMap2.default)();
      };

      (0, _chai.expect)(construct).to.not.throw();
    });

    it("should accept a rule number (0 - 255)", function () {
      var map = (0, _RuleMap2.default)(109);
      (0, _chai.expect)(map.getValue(true, true, true)).to.be.equal(false);

      (0, _chai.expect)(map.getValue(true, true, false)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(true, false, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(true, false, false)).to.be.equal(false);

      (0, _chai.expect)(map.getValue(false, true, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, true, false)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, false, true)).to.be.equal(false);

      (0, _chai.expect)(map.getValue(false, false, false)).to.be.equal(true);

      map = (0, _RuleMap2.default)(254);
      (0, _chai.expect)(map.getValue(true, true, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(true, true, false)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(true, false, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(true, false, false)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, true, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, true, false)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, false, true)).to.be.equal(true);

      (0, _chai.expect)(map.getValue(false, false, false)).to.be.equal(false);
    });
  });

  describe("setRule", function () {
    var rule_tree = void 0;

    beforeEach(function () {
      rule_tree = (0, _RuleMap2.default)();
    });

    it("should have the function", function () {
      (0, _chai.expect)(rule_tree).to.include.keys("setRule");
    });

    it("should allow four boolean parameters and return a new RuleMap", function () {
      var result = void 0;
      (0, _chai.expect)(function () {
        result = rule_tree.setRule(true, true, true, true);
      }).not.to.throw();

      (0, _chai.expect)(result).not.to.equal(rule_tree);
    });
  });

  describe("getValue", function () {
    var rule_tree = (0, _RuleMap2.default)().setRule(true, true, true, true).setRule(true, true, false, false);

    it("should have the function", function () {
      (0, _chai.expect)(rule_tree).to.include.keys("getValue");
    });

    it("should take three boolean parameters and return the value for this rule", function () {
      (0, _chai.expect)(rule_tree.getValue(true, true, true)).to.equal(true);
      (0, _chai.expect)(rule_tree.getValue(true, true, false)).to.equal(false);
    });
  });
});