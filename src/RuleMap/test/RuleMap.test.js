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

    it("should accept a rule number (0 - 255)", function(){
      let map = RuleMap(109);
      expect(
        map.getValue(true, true, true)
      ).to.be.equal(false);

      expect(
        map.getValue(true, true, false)
      ).to.be.equal(true);

      expect(
        map.getValue(true, false, true)
      ).to.be.equal(true);

      expect(
        map.getValue(true, false, false)
      ).to.be.equal(false);

      expect(
        map.getValue(false, true, true)
      ).to.be.equal(true);

      expect(
        map.getValue(false, true, false)
      ).to.be.equal(true);

      expect(
        map.getValue(false, false, true)
      ).to.be.equal(false);

      expect(
        map.getValue(false, false, false)
      ).to.be.equal(true);

      map = RuleMap(254);
      expect(
        map.getValue(true, true, true)
      ).to.be.equal(true);

      expect(
        map.getValue(true, true, false)
      ).to.be.equal(true);

      expect(
        map.getValue(true, false, true)
      ).to.be.equal(true);

      expect(
        map.getValue(true, false, false)
      ).to.be.equal(true);

      expect(
        map.getValue(false, true, true)
      ).to.be.equal(true);

      expect(
        map.getValue(false, true, false)
      ).to.be.equal(true);

      expect(
        map.getValue(false, false, true)
      ).to.be.equal(true);

      expect(
        map.getValue(false, false, false)
      ).to.be.equal(false);
    });
  });

  describe("setRule", function(){
    let rule_tree;

    beforeEach(function(){
      rule_tree = RuleMap();
    });

    it("should have the function", function(){
      expect(rule_tree).to.include.keys("setRule");
    });

    it("should allow four boolean parameters and return a new RuleMap", function(){
      let result;
      expect(() => {
        result = rule_tree.setRule(true, true, true, true);
      }).not.to.throw();

      expect(result).not.to.equal(rule_tree);
    });
  });

  describe("getValue", function(){
    const rule_tree = (
      RuleMap()
      .setRule(true, true, true, true)
      .setRule(true, true, false, false)
    );

    it("should have the function", function(){
      expect(rule_tree).to.include.keys("getValue");
    });

    it("should take three boolean parameters and return the value for this rule", function(){
      expect(rule_tree.getValue(true, true, true)).to.equal(true);
      expect(rule_tree.getValue(true, true, false)).to.equal(false);
    });
  });
});
