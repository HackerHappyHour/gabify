var {run} = require("@cycle/core");
var {div, makeDOMDriver} = require("@cycle/dom");

function main(sources){
  return {
    DOM: Rx.Observable.of(
      div(['Welcome to impact team chat'])
    )
  };
};

var drivers = {
  DOM: makeDOMDriver('#app')
};

run(main, drivers);
