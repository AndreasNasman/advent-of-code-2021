// import input from "./example-input.json";
import input from "./puzzle-input.json";

const DIRECTIONS = {
  DOWN: "down",
  FORWARD: "forward",
  UP: "up",
};

let aim = 0;
let horizontalPosition = 0;
let depth = 0;

input.forEach((entry) => {
  const { groups: { direction, value: valueStr } = {} } = entry.match(
    /(?<direction>\w+) (?<value>\d+)/
  );
  const value = Number(valueStr);

  if (direction === DIRECTIONS.DOWN) {
    aim += value;
  } else if (direction === DIRECTIONS.UP) {
    aim -= value;
  } else if (direction == DIRECTIONS.FORWARD) {
    horizontalPosition += value;
    depth += aim * value;
  } else {
    throw new Error("Unknown direction.");
  }
});

const result = horizontalPosition * depth;
console.log(result);
