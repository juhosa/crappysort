const utils = require("./utils");

let data = [2, 1, 3, 5, 9];

const shufflesort = d => {
  let shuffled = utils.shuffle(d);
  return shuffled;
};

const start_shufflesort = () => {
  let count = 0;
  while (!utils.isSorted(data)) {
    data = shufflesort(data);
    count++;
    if (count % 10 === 0) {
      console.log(`Iterations ${count}`);
    }
  }

  console.log(
    `Took ${count} iterations to sort an array with length of ${data.length} with shuffle`
  );
};

start_shufflesort();
