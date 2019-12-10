const utils = require("./utils");

let population = [];

const generateInitialPopulation = (data, size) => {
  let t = data;
  let tmp = [];
  tmp.push({ data: data.slice(), cost: -1 });
  for (let i = 0; i < size - 1; i++) {
    t = utils.shuffle(data).slice();
    tmp.push({ data: t, cost: -1 });
  }
  return tmp;
};

const update_costs = () => {
  // A super algorithm; calc the number of falsy orders.
  for (let p of population) {
    // console.log({ p });

    let cost = 0;
    for (let i = 0; i < p.data.length; i++) {
      if (p.data[i] > p.data[i + 1]) {
        cost++;
      }
    }
    p.cost = cost;
    // console.log({ p });
  }
};

const breed = pops => {
  let new_pop = [];
  return new_pop;
};

const crappysort = data => {
  if (population.length === 0) {
    population = generateInitialPopulation(data, 10);

    let one = utils.hot_encode(population[0]);
    console.log(population[0]);
    console.log({ one });
  }
  //   console.log({ population });
  // main loop
  generations = 0;
  while (generations < 1) {
    update_costs();

    // solution found?
    let s = population.find(x => x.cost === 0);
    generations++;
    if (s !== undefined) {
      console.log({ s });
      console.log({ generations });
      break;
    }

    // drop the unwanted
    let remaining = population.filter(x => x.cost <= data.length / 2);
    // console.log({ remaining });

    // breed / cross-over
    population = breed(remaining);
  }
};

module.exports.crappysort = crappysort;
