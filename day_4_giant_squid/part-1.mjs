import input from "./example-input.json";
// import input from "./puzzle-input.json";

const mark = 'X'

const { numbers, boards } = input;
console.log(numbers, boards);

for (const number of numbers) {
  console.log(number);
  boards.forEach((board, boardIndex) => {
    board.some((row, rowIndex) => {
      const columnIndex = row.findIndex(cell => cell === number);
      if (columnIndex > -1) {
        board[boardIndex][rowIndex][columnIndex]= 'x'

        console.log("Match!", i, match);
        return true;
      }

      return false;
    });
  });
}
