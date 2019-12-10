// https://stackoverflow.com/a/6274381
const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

const isSorted = d => {
  for (let i = 0; i < d.length - 1; i++) {
    if (d[i] > d[i + 1]) {
      return false;
    }
  }
  return true;
};

const hot_encode = d => {
  let max = d.data.reduce((a, b) => Math.max(a, b));
  let encoded = [];

  for (let i = 0; i < d.data.length; i++) {
    let tmp = Array(max + 1).fill(0);
    tmp[d.data[i]] = 1;
    encoded.push(tmp);
  }

  return encoded;
};

module.exports.shuffle = shuffle;
module.exports.isSorted = isSorted;
module.exports.hot_encode = hot_encode;
