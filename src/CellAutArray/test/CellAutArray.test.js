import {expect} from "~/src/global/tests/chai";
import CellAutArray from "../CellAutArray";
import TestRule from "./TestRule";

/*eslint-disable no-undef*/
describe("CellAutArray", function(){
  describe("constructor", function(){
    it("should accept just a rule", function(){
      expect(
        () => {
          CellAutArray(TestRule);
        }
      ).to.not.throw();
    });

    it("should accept a rule and an integer (size of a single row)", function(){
      expect(
        () => {
          CellAutArray(TestRule, 10);
        }
      ).to.not.throw();
    });

    it("should accept a rule and an array of boolean values (initial first row)", function(){
      expect(
        () => {
          CellAutArray(TestRule, [true, false, true]);
        }
      ).to.not.throw();
    });
  });

  describe("generate()", function(){
    let cell_aut_arr;
    const init_row  = [true, false, true, false, false];

    beforeEach(function(){
      cell_aut_arr = CellAutArray(TestRule, init_row);
    });

    it("should generate a single new row if called without a parameter", function(){
      const init_row_count = cell_aut_arr.getRowCount();
      cell_aut_arr.generate();
      expect(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + 1);
      cell_aut_arr.generate();
      expect(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + 2);
    });

    it("should generate as many rows a given as an integer parameter", function(){
      const init_row_count = cell_aut_arr.getRowCount();
      const add_count = 12;
      cell_aut_arr.generate(add_count);
      expect(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + add_count);
      cell_aut_arr.generate(add_count);
      expect(cell_aut_arr.getRowCount()).to.be.equal(init_row_count + add_count * 2);
    });

    it("should generate a row depending on the previous rows state and the given rule", function(){
      cell_aut_arr.generate(2);
      expect(cell_aut_arr.getRowCount()).to.be.equal(3);
      const state = cell_aut_arr.getState();
      const expected = [
        init_row,//[true, false, true, false, false]
        [true, true, false, false, false],
        [false, false, false, false, false]
      ];

      expect(state).to.deep.equal(expected);
    });
  });
});
