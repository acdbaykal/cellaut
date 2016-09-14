import RuleMap from '~/src/RuleMap/RuleMap';

export default (
  RuleMap().
  setRule(false, false, false, false).
  setRule(false, false, true, true).
  setRule(false, true, false, false).
  setRule(false, true, true, true).
  setRule(true, false, false, false).
  setRule(true, false, true, true).
  setRule(true, true, false, false).
  setRule(true, true, true, true)
);
