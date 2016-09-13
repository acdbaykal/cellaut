"use strict";

var _chai = require("../../global/tests/chai");

var _CellAutArray = require("../CellAutArray");

var _CellAutArray2 = _interopRequireDefault(_CellAutArray);

var _TestRule = require("./TestRule");

var _TestRule2 = _interopRequireDefault(_TestRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-undef*/
describe("CellAutArray", function () {
  describe("constructor", function () {
    it("should accept just a rule", function () {
      (0, _chai.expect)(function () {
        (0, _CellAutArray2.default)(_TestRule2.default);
      }).to.not.throw();
    });

    it("should accept a rule and an integer (size of a single row)", function () {
      (0, _chai.expect)(function () {
        (0, _CellAutArray2.default)(_TestRule2.default, 10);
      }).to.not.throw();
    });

    it("should accept a rule and an array of boolean values (initial first row)", function () {
      (0, _chai.expect)(function () {
        (0, _CellAutArray2.default)(_TestRule2.default, [true, false, true]);
      }).to.not.throw();
    });
  });

  describe("generate()", function () {
    var cell_aut_arr = void 0;
    var init_row = [true, false, true, false, false];

    beforeEach(function () {
      cell_aut_arr = (0, _CellAutArray2.default)(_TestRule2.default, init_row);
    });

    it("should generate a single new row if called without a parameter", function () {
      var init_row_count = cell_aut_arr.getRowCount();
      cell_aut_arr.generate();
      (0, _chai.expect)(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + 1);
      cell_aut_arr.generate();
      (0, _chai.expect)(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + 2);
    });

    it("should generate as many rows a given as an integer parameter", function () {
      var init_row_count = cell_aut_arr.getRowCount();
      var add_count = 12;
      cell_aut_arr.generate(add_count);
      (0, _chai.expect)(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + add_count);
      cell_aut_arr.generate(add_count);
      (0, _chai.expect)(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + add_count * 2);
    });

    it("should generate a row depending on the previous rows state and the given rule", function () {
      cell_aut_arr.generate(2);
      (0, _chai.expect)(cell_aut_arr.getRowCount()).to.be.equal(3);
      var state = cell_aut_arr.getState();
      var expected = [init_row, [false, true, false, false, false], [true, false, false, false, false]];

      (0, _chai.expect)(state).to.deep.equal(expected);
    });
  });
});