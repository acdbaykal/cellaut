import RuleMap from '~/src/RuleMap/RuleMap';

export default (
  RuleMap().
  addRule(false, false, false, false).
  addRule(false, false, true, true).
  addRule(false, true, false, false).
  addRule(false, true, true, true).
  addRule(true, false, false, false).
  addRule(true, false, true, true).
  addRule(true, true, false, false).
  addRule(true, true, true, true).
  addRule(false, false, false).
  addRule(false, true, true).
  addRule(true, false, false).
  addRule(true, true, true)
);
