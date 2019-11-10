//Prompt: get the median value of the stream

var MedianStream = function () {
  this.data = [];
};

MedianStream.prototype = {
  insert: function (val) {
    if (!this.data.length) {
      this.data.push(val);
      return this.data;
    }
    
    for (let i = 0; i < this.data.length; i++) {
      if (i === 0 && val <= this.data[i]) {
        this.data.unshift(val);
      } else if (val > this.data[i] && val < this.data[i + 1]) {
        this.data.splice((i + 1), 0, val);
      } else if (i === (this.data.length - 1) && val > this.data[i]) {
        this.data.push(val);
      }
    }
    return this.data;
  },
  peekMedian: function () {
  	 if (this.size() < 2) {
    	return this.data[0];
    }
    if (this.size() % 2 === 0) {
      const medianOne = (this.size() / 2) - 1;
      const medianTwo = medianOne + 1;
      return (this.data[medianOne] + this.data[medianTwo]) / 2;
    } else {
      const median = Math.floor(this.size() / 2);
      return this.data[median];
    }
  },
  size: function () {
    return this.data.length;
  }
};

module.exports = MedianStream;