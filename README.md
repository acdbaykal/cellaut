# cellaut - a small framework for one dimensional, elementary cellular automata related applications

cellaut includes some esential objects to model and process the cellular automata listed at <http://atlas.wolfram.com/01/01/>. It can be used within projects targetting the browser or node.js. It has three parts.

## RuleMap
RuleMaps are immutable. They map the state of the three upper neighbours to the resulting state of a cell.

## CellAutArray
These are two dimensinal boolean arrays which represent the complete state of the cellular automata. Their constructor requires a RuleMap as a parameter. The second optional parameter is either a one dimensional boolean array or an integer. If an array is given, the CellAutArray will use it as the first row; if an integer is given, it will serve as the length of each row and the first row will be generated randomly.

CellAutArrays have a **generate** method, which creates new rows accourding to the given rule. It can take the number of new rows as a parameter. If the parameter is left out it will generate a single new row.

## Renderers
A renderer is a function, which takes a CellAutArray and transforms it into another format. Currently there is only the DOMRender available. This renderer inserts div and span elements into a DOM. Other thinkable renderers could run on a server and make use of a template engine or write the binary data into an audio file.

## Example project
There is a small example project available under <https://github.com/acdbaykal/cellaut.examples.dom.18>. You can view its result under <https://cdn.rawgit.com/acdbaykal/cellaut.examples.dom.18/master/dist/index.html>.
