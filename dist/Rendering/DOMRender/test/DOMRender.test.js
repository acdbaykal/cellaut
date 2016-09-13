"use strict";

var _chai = require("../../../global/tests/chai");

var _jsdom = require("jsdom");

var _TestRule = require("./TestRule");

var _TestRule2 = _interopRequireDefault(_TestRule);

var _CellAutArray = require("../../../CellAutArray/CellAutArray");

var _CellAutArray2 = _interopRequireDefault(_CellAutArray);

var _DOMRender = require("../DOMRender");

var _DOMRender2 = _interopRequireDefault(_DOMRender);

var _ClassHelper = require("../ClassHelper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable no-undef*/
describe("DOMRender", function () {
  //eslint-disable-next-line quotes
  var html = '<html><head></head><body><div id="container"></div></body></html>';
  var init_row = [true, false, true, false, false];
  var render = void 0;
  var cell_aut_array = void 0;
  var doc = void 0;
  var container = void 0;

  beforeEach(function () {
    doc = (0, _jsdom.jsdom)(html);
    container = doc.getElementById("container");
    render = (0, _DOMRender2.default)(doc, container, 0);

    cell_aut_array = (0, _CellAutArray2.default)(_TestRule2.default, init_row);
  });

  it("should render", function (done) {
    cell_aut_array.generate(2);
    render(cell_aut_array, function () {
      var rows = container.querySelectorAll(".cellaut_row");
      (0, _chai.expect)(rows.length).to.be.equal(3);
      var cells = container.querySelectorAll(".cellaut_cell");
      (0, _chai.expect)(cells.length).to.be.equal(init_row.length * 3);
      var first_row = rows[0];
      var first_row_cells = first_row.querySelectorAll(".cellaut_cell");
      (0, _chai.expect)(first_row_cells.length).to.be.equal(init_row.length);

      var on_mod = "cellaut_cell--on";
      var off_mod = "cellaut_cell--off";
      for (var i = 0, i_limit = init_row.length; i < i_limit; i++) {
        var val = init_row[i];
        var expected_mod = val ? on_mod : off_mod;
        var unexpected_mod = val ? off_mod : on_mod;
        var cell = first_row_cells[i];
        (0, _chai.expect)((0, _ClassHelper.hasClass)(cell, expected_mod)).to.be.equal(true);
        (0, _chai.expect)((0, _ClassHelper.hasClass)(cell, unexpected_mod)).to.be.equal(false);
      }
      done();
    });
  });
});