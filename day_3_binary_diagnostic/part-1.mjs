// import input from "./example-input.json";
import input from "./puzzle-input.json";

const gammaRate = input
  .reduce((bitIncidence, entry) => {
    entry.split("").forEach((digit, index) => {
      let value = bitIncidence[index] ?? 0;
      digit == 1 ? (value += 1) : (value -= 1);
      bitIncidence[index] = value;
    });

    return bitIncidence;
  }, [])
  .map((occurene) => {
    if (occurene > 0) return 1;
    else if (occurene < 0) return 0;
    else
      throw new Error(
        "Equal occurence of 0's and 1's. Unclear how to proceed."
      );
  })
  .join("");
const epsilonRate = flipBits(gammaRate);

const powerConsumption = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
console.log(powerConsumption);

/* Functions */

function flipBits(bits) {
  return bits
    .split("")
    .map((bit) => 1 - bit)
    .join("");
}
