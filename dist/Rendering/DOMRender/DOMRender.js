"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _ClassHelper = require("./ClassHelper");

function DOMRender(document, container) {
  var default_interval_duration = arguments.length <= 2 || arguments[2] === undefined ? 100 : arguments[2];


  function createSingleRowElement(row) {
    var row_elem = document.createElement("div");
    (0, _ClassHelper.addClass)(row_elem, "cellaut_row");
    for (var i = 0, i_limit = row.length; i < i_limit; i++) {
      var value = row[i];
      var block = "cellaut_cell";
      var modifier = value ? "cellaut_cell--on" : "cellaut_cell--off";
      var cell_element = document.createElement("span");
      (0, _ClassHelper.addClass)(cell_element, block);
      (0, _ClassHelper.addClass)(cell_element, modifier);
      row_elem.appendChild(cell_element);
    }
    return row_elem;
  }

  return function render(cell_aut_array) {
    var _arguments = arguments;

    //set optional arguments
    var _apply = function () {
      var len = _arguments.length;
      if (len === 1) {
        //no optional arguments given
        return [default_interval_duration, function () {}];
      } else if (len === 2) {
        //one optional argument given
        var optional_arg = _arguments[1];
        var arg_type = typeof optional_arg === "undefined" ? "undefined" : _typeof(optional_arg);
        if (arg_type === "number") {
          return [optional_arg, function () {}];
        } else if (arg_type === "function") {
          return [default_interval_duration, optional_arg];
        } else {
          return [default_interval_duration, function () {}];
        }
      } else {
        return [_arguments[1], _arguments[2]];
      }
    }.apply(undefined, arguments);

    var _apply2 = _slicedToArray(_apply, 2);

    var interval_duration = _apply2[0];
    var oncomplete = _apply2[1];


    var row_count = cell_aut_array.getRowCount();
    var arr = cell_aut_array.getState();
    var current_row_index = -1;
    var interval = function () {
      function onInterval() {
        current_row_index++;
        if (current_row_index === row_count) {
          //eslint-disable-next-line no-undef
          clearInterval(interval);
          oncomplete();
        } else {
          var row = arr[current_row_index];
          var row_elem = createSingleRowElement(row);
          container.appendChild(row_elem);
        }
      }

      //eslint-disable-next-line no-undef
      return setInterval(onInterval, interval_duration);
    }();
  };
}

exports.default = DOMRender;