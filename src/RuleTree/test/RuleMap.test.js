import {expect} from "~/src/global/tests/chai";
import RuleMap from "../RuleMap";

/*eslint-disable no-undef*/
describe("RuleMap", function(){
  describe("constuctor", function(){
    it("should accept 0 params", function(){
      const construct  = () => {
        RuleMap();
      };

      expect(construct).to.not.throw();
    });
  });

  describe("addRule", function(){
    let rule_tree;

    beforeEach(function(){
      rule_tree = RuleMap();
    });

    it("should have the function", function(){
      expect(rule_tree).to.include.keys("addRule");
    });

    it("should allow four boolean parameters and return a new RuleMap", function(){
      let result;
      expect(() => {
        result = rule_tree.addRule(true, true, true, true);
      }).not.to.throw();

      expect(result).not.to.equal(rule_tree);
    });

    it("should allow three boolean parameters and return a new RuleMap", function(){
      let result;
      expect(() => {
        result = rule_tree.addRule(true, true, true);
      }).not.to.throw();

      expect(result).not.to.equal(rule_tree);
    });
  });

  describe("getValue", function(){
    let rule_tree;

    beforeEach(function(){
      rule_tree = RuleMap().
                  addRule(true, true, true, true).
                  addRule(true, true, false, false).
                  addRule(true, true, true).
                  addRule(true, false, false)
      ;
    });

    it("should have the function", function(){
      expect(rule_tree).to.include.keys("getValue");
    });

    it("should allow four two to three boolean parameters and return the value for this rule", function(){
      expect(rule_tree.getValue(true, true)).to.equal(true);
      expect(rule_tree.getValue(true, false)).to.equal(false);
      expect(rule_tree.getValue(true, true, true)).to.equal(true);
      expect(rule_tree.getValue(true, true, false)).to.equal(false);
    });
  });
});
