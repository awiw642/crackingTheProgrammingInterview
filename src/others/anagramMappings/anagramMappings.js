const _ = require('underscore');

const anagramMappings = (a, b) => {
  const mapB = {};
  const result = [];

  b.forEach((item, index) => {
    if (!mapB[item]) {
      mapB[item] = { index };
    }
  });

  a.forEach((item) => {
    if (mapB[item]) {
      result.push(mapB[item].index);
    }
  });

  return _.uniq(result);
};

module.exports = anagramMappings;
