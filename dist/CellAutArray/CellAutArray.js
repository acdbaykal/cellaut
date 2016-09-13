"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function randomBoolean() {
  var zero_or_one = Math.round(Math.random());
  return Boolean(zero_or_one);
}

function CellAutArray(rule_map) {
  var size_or_row = arguments.length <= 1 || arguments[1] === undefined ? 100 : arguments[1];

  var _ref = function () {
    if (typeof size_or_row === "number") {
      var size = Math.round(size_or_row);
      var first_row = [];
      var _state = [first_row];

      for (var i = 0; i < size; i++) {
        first_row.push(randomBoolean());
      }

      return [size, _state];
    } else if (size_or_row instanceof Array) {
      return [size_or_row.length, [size_or_row]];
    }
    return [];
  }();

  var _ref2 = _slicedToArray(_ref, 2);

  var row_size = _ref2[0];
  var state = _ref2[1];


  function generate() {
    var row_count = arguments.length <= 0 || arguments[0] === undefined ? 1 : arguments[0];

    var _loop = function _loop(i) {
      var new_row = [];
      var last_row = state[state.length - 1];
      state.push(new_row);

      var _loop2 = function _loop2(j) {
        var value = function () {
          if (j === 0) {
            var _center_top = last_row[0];
            var _right_top = last_row[1];
            return rule_map.getValue(_center_top, _right_top);
          } else if (j === row_size - 1) {
            var _left_top = last_row[j];
            var _center_top2 = last_row[j - 1];
            return rule_map.getValue(_left_top, _center_top2);
          }
          var left_top = last_row[j - 1];
          var center_top = last_row[j];
          var right_top = last_row[j + 1];
          return rule_map.getValue(left_top, center_top, right_top);
        }();

        new_row.push(value);
      };

      for (var j = 0; j < row_size; j++) {
        _loop2(j);
      }
    };

    for (var i = 0; i < row_count; i++) {
      _loop(i);
    }
  }

  function getState() {
    var state_copy = []; //let's not leak out the actual reference

    for (var i = 0, iLimit = state.length; i < iLimit; i++) {
      var row_from = state[i];
      var row_to = [];
      state_copy.push(row_to);

      for (var j = 0, jLimit = row_from.length; j < jLimit; j++) {
        row_to[j] = row_from[j];
      }
    }

    return state_copy;
  }

  function getRowCount() {
    return state.length;
  }

  return { generate: generate, getRowCount: getRowCount, getState: getState };
}

exports.default = CellAutArray;