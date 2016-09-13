import {expect} from "~/src/global/tests/chai";
import {jsdom} from "jsdom";
import TestRule from "./TestRule";
import CellAutArray from "~/src/CellAutArray/CellAutArray";
import DOMRender from "../DOMRender";
import {hasClass} from "../ClassHelper";

/*eslint-disable no-undef*/
describe("DOMRender", function(){
  //eslint-disable-next-line quotes
  const html = '<html><head></head><body><div id="container"></div></body></html>';
  const init_row = [true, false, true, false, false];
  let render;
  let cell_aut_array;
  let doc;
  let container;

  beforeEach(function(){
    doc = jsdom(html);
    container = doc.getElementById("container");
    render = DOMRender(doc, container, 0);

    cell_aut_array = CellAutArray(TestRule, init_row);
  });

  it("should render", function(done){
    cell_aut_array.generate(2);
    render(cell_aut_array, () => {
      const rows = container.querySelectorAll(".cellaut_row");
      expect(rows.length).to.be.equal(3);
      const cells = container.querySelectorAll(".cellaut_cell");
      expect(cells.length).to.be.equal(init_row.length * 3);
      const first_row = rows[0];
      const first_row_cells = first_row.querySelectorAll(".cellaut_cell");
      expect(first_row_cells.length).to.be.equal(init_row.length);

      const on_mod = "cellaut_cell--on";
      const off_mod = "cellaut_cell--off";
      for(let i = 0, i_limit = init_row.length; i < i_limit; i++){
        const val = init_row[i];
        const expected_mod = val ? on_mod : off_mod;
        const unexpected_mod = val ? off_mod : on_mod;
        const cell = first_row_cells[i];
        expect(hasClass(cell, expected_mod)).to.be.equal(true);
        expect(hasClass(cell, unexpected_mod)).to.be.equal(false);
      }
      done();
    });
  });
});
