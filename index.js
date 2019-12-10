const utils = require("./utils");
const shufflesort = require("./shufflesort").shufflesort;
const crappysort = require("./crappysort").crappysort;

let data = [2, 1, 3, 5, 9];

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

const start_crappysort = () => {
  crappysort(data);
};

// start_shufflesort();
start_crappysort();
