let data = [2, 1, 3, 5, 9];

const isSorted = d => {
  for (let i = 0; i < d.length - 1; i++) {
    if (d[i] > d[i + 1]) {
      return false;
    }
  }
  return true;
};

const crappysort = d => {
  let shuffled = shuffle(d);
  return shuffled;
};

// https://stackoverflow.com/a/6274381
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// console.log(isSorted(crappysort(data)));
// console.log(isSorted(data));
const start_shufflesort = () => {
  let count = 0;
  while (!isSorted(data)) {
    data = crappysort(data);
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
