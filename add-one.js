const addOne = function (nums) {
  for (i = 0; i < nums.length; i++) {
    nums[i] = nums[i] + 1;
  }
  return nums;
};

module.exports = addOne;
