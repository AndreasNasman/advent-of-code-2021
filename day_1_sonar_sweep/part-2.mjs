// import input from "./example-input.json";
import input from "./puzzle-input.json";

const SIZE = 3;

let depthMeasurementIncreases = 0;
for (let index = 0; index < input.length - SIZE; index += 1) {
  const previousSum = input.slice(index, index + SIZE).reduce(sum);

  const nextIndex = index + 1;
  const nextSum = input.slice(nextIndex, nextIndex + SIZE).reduce(sum);

  if (nextSum > previousSum) depthMeasurementIncreases += 1;
}

console.log(depthMeasurementIncreases);

/* Functions */

function sum(currentSum, value) {
  return (currentSum += value);
}
