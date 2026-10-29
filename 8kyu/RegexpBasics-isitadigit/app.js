String.prototype.digit = function() {
  // console.log(this.toString());
  let pattern = /^\d$/;
  let result = this.match(pattern);
  return result ? true : false;
};