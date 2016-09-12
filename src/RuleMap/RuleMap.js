import {Map} from "immutable";

const RuleMap = function(rules_param){
  const rules = rules_param || Map({});

  function _valuesToKey(left_top, center_top, right_top){
    const left_top_key = left_top ? "1" : "0";
    const center_top_key = center_top ? "1" : "0";
    const right_top_key = typeof right_top === "boolean" ? (
      right_top ? "1" : "0"
    ) : "";

    return left_top_key + center_top_key + right_top_key;
  }

  function addRule(){
    const [left_top, center_top, right_top, self] = (()=>{
      if(arguments.length === 4){
        return arguments;
      }
      return [arguments[0], arguments[1], undefined, arguments[2]];
    }).apply(undefined, arguments);


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

  return {addRule, getValue, toString};
};

export default RuleMap;
