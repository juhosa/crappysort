const utils = require("./utils");

const shufflesort = d => {
  let shuffled = utils.shuffle(d);
  return shuffled;
};

module.exports.shufflesort = shufflesort;
