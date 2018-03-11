const urlIfy = string => string.split('').map((word) => {
  if (word === ' ') { return '%20'; }
  return word;
}).join('');

module.exports = urlIfy;
