import {addClass} from "./ClassHelper";

function DOMRender(document, container, default_interval_duration = 100){

  function createSingleRowElement(row){
    var row_elem = document.createElement("div");
    addClass(row_elem, "cellaut_row");
    for(let i = 0, i_limit = row.length; i < i_limit; i++){
      const value = row[i];
      const block = "cellaut_cell";
      const modifier = value ? "cellaut_cell--on" : "cellaut_cell--off";
      const cell_element = document.createElement("span");
      addClass(cell_element, block);
      addClass(cell_element, modifier);
      row_elem.appendChild(cell_element);
    }
    return row_elem;
  }

  return function render(cell_aut_array){
    //set optional arguments
    const [interval_duration, oncomplete] = (() => {
      const len = arguments.length;
      if(len === 1){//no optional arguments given
        return [default_interval_duration, () => {}];
      }
      else if(len === 2){//one optional argument given
        const optional_arg = arguments[1];
        const arg_type = typeof optional_arg;
        if(arg_type === "number"){
          return [optional_arg, () => {}];
        }
        else if(arg_type === "function"){
          return [default_interval_duration, optional_arg];
        }
        else{
          return [default_interval_duration, () => {}];
        }
      }
      else{
        return [arguments[1], arguments[2]];
      }
    }).apply(undefined, arguments);

    const row_count = cell_aut_array.getRowCount();
    const arr = cell_aut_array.getState();
    let current_row_index = -1;
    const interval = (()=>{
      function onInterval(){
        current_row_index++;
        if(current_row_index === row_count){
          //eslint-disable-next-line no-undef
          clearInterval(interval);
          oncomplete();
        }
        else{
          const row = arr[current_row_index];
          const row_elem = createSingleRowElement(row);
          container.appendChild(row_elem);
        }
      }

      //eslint-disable-next-line no-undef
      return setInterval(onInterval, interval_duration);
    })();
  };
}


export default DOMRender;
