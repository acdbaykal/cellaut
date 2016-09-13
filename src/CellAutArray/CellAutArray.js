
function randomBoolean(){
  const zero_or_one = Math.round(Math.random());
  return Boolean(zero_or_one);
}

function CellAutArray(rule_map, size_or_row = 100){
  const [row_size, state] = (()=>{
    if(typeof size_or_row === "number")
    {
      const size = Math.round(size_or_row);
      const first_row = [];
      const state = [first_row];

      for(let i = 0; i < size; i++){
        first_row.push(randomBoolean());
      }

      return [size, state];
    }
    else if(size_or_row instanceof Array){
      return [size_or_row.length, [size_or_row]];
    }
    return [];
  })();

  function generate(row_count = 1){
    for(let i = 0; i < row_count; i++){
      const new_row = [];
      const last_row = state[state.length - 1];
      state.push(new_row);

      for(let j = 0; j < row_size; j++){
        const value  = (() => {
          if(j === 0){
            const left_top = last_row[0];
            const center_top = last_row[1];
            const right_top = last_row[2];
            return rule_map.getValue(left_top, center_top, right_top);
          }
          else if(j === row_size - 1){
            const left_top = last_row[j-2];
            const center_top = last_row[j-1];
            const right_top = last_row[j];
            return rule_map.getValue(left_top, center_top, right_top);
          }
          const left_top = last_row[j-1];
          const center_top = last_row[j];
          const right_top = last_row[j+1];
          return rule_map.getValue(left_top, center_top, right_top);
        })();

        new_row.push(value);
      }
    }
  }

  function getState(){
    const state_copy = []; //let's not leak out the actual reference

    for(let i = 0, iLimit = state.length; i < iLimit; i++){
      const row_from = state[i];
      const row_to = [];
      state_copy.push(row_to);

      for(let j = 0, jLimit = row_from.length;  j < jLimit; j++){
        row_to[j] = row_from[j];
      }
    }

    return state_copy;
  }

  function getRowCount(){
    return state.length;
  }

  return {generate, getRowCount, getState};
}

export default CellAutArray;
