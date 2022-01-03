// import input from "./example-input.json";
import input from "./puzzle-input.json";

const sortedInput = input.sort();

const oxygenGeneratorRating = parseInt(findRating(mostCommon), 2);
const co2ScrubberRating = parseInt(findRating(leastCommon), 2);
const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

console.log(lifeSupportRating);

/* Functions */
function findRating(condition, array = sortedInput, characterIndex = 0) {
  const transitionIndex = array.findIndex(
    (binaryString) => binaryString[characterIndex] == 1
  );

  const middleIndex = Math.round((array.length - 1) / 2);
  if (condition(transitionIndex, middleIndex)) {
    array = array.slice(transitionIndex);
  } else {
    array = array.slice(0, transitionIndex);
  }

  if (array.length == 1) return array[0];

  return findRating(condition, array, ++characterIndex);
}

function mostCommon(transitionIndex, middleIndex) {
  return transitionIndex <= middleIndex;
}

function leastCommon(transitionIndex, middleIndex) {
  return transitionIndex > middleIndex;
}
