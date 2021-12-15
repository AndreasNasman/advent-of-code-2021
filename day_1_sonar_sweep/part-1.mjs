// import input from "./example-input.json";
import input from "./puzzle-input.json";

let depthMeasurementIncreases = 0;
input.reduce((previous, next) => {
  if (next > previous) depthMeasurementIncreases += 1;
  return next;
});

console.log(depthMeasurementIncreases);
