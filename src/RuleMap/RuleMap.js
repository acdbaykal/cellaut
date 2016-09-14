import {Map} from "immutable";

const POSSIBLE_NEIGHBOUR_STATES = [
  [true, true, true],
  [true, true, false],
  [true, false, true],
  [true, false, false],
  [false, true, true],
  [false, true, false],
  [false, false, true],
  [false, false, false]
];

const POWERS_OF_TWO = [128, 64, 32, 16, 8, 4, 2, 1];

const RuleMap = function(){
  function _valuesToKey(left_top, center_top, right_top){
    const left_top_key = left_top ? "1" : "0";
    const center_top_key = center_top ? "1" : "0";
    const right_top_key = typeof right_top === "boolean" ? (
      right_top ? "1" : "0"
    ) : "";

    return left_top_key + center_top_key + right_top_key;
  }

  //set initial rules
  const rules = (() => {
    if(arguments.length === 0){
      return  Map({});
    }
    else{
      const param = arguments[0];
      if(param instanceof Map){
        return param;
      }
      else if(typeof param === "number"){
        const rule_number = Math.round(param) % 256; //cut off anything larger than 255
        const result = {};
        let remain = rule_number;
        for(let i = 0; i < 8 ; i++){
          const p = POWERS_OF_TWO[i];
          const int_div = Math.floor(remain / p); //0 or 1
          remain -= p * int_div;

          const neighbour_state = POSSIBLE_NEIGHBOUR_STATES[i];
          const key = _valuesToKey.apply(undefined, neighbour_state);
          result[key] = Boolean(int_div);
        }
        return Map(result);
      }
    }
  }).apply(undefined, arguments);

  function setRule(left_top, center_top, right_top, self){
    const key = _valuesToKey(left_top, center_top, right_top);
    const new_rules = rules.set(key, self);
    return RuleMap(new_rules);
  }

  function getValue(left_top, center_top, right_top){
    const key = _valuesToKey(left_top, center_top, right_top);
    return rules.get(key);
  }

  function toString(){
    return JSON.stringify(rules.toObject());
  }

  return {setRule, getValue, toString};
};

export default RuleMap;
