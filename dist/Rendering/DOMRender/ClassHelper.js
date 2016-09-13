"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hasClass(element, class_name) {
  var current_class = element.className;
  return current_class.indexOf(class_name) > -1;
}

function addClass(element, class_name) {
  var not_has_class = !hasClass(element, class_name);

  if (not_has_class) {
    var current_class = element.className;
    element.className = current_class.trim() === "" ? class_name : current_class + " " + class_name;
  }

  return not_has_class;
}

function removeClass(element, class_name) {
  var has_class = hasClass(element, class_name);
  if (has_class) {
    element.className = element.className.replace(class_name, "");
  }

  return has_class;
}

exports.addClass = addClass;
exports.hasClass = hasClass;
exports.removeClass = removeClass;